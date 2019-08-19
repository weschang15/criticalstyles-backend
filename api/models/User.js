import argon2 from "argon2";
import pick from "lodash/pick";
import { createModel, _Schema, Types } from "./Utils";

const UserSchema = new _Schema(
  {
    firstName: {
      type: String,
      required: [true, "A first name must be provided."],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, "A last name must be provided."],
      trim: true
    },
    email: {
      type: String,
      required: [true, "An email must be provided."],
      trim: true,
      unique: true,
      index: true
    },
    password: {
      type: String,
      required: [true, "A password must be provided"],
      minlength: 8,
      maxlength: 1024,
      trim: true
    },
    accounts: [{ type: Types.ObjectId, ref: "Account" }]
  },
  { toJSON: { virtuals: true }, toObject: { vrituals: true } }
);

UserSchema.virtual("defaultAccount").get(function() {
  return this.accounts[0];
});

UserSchema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await argon2.hash(user.password);
  }

  return next();
});

UserSchema.methods.toJSON = function() {
  return pick(this, ["firstName", "lastName", "email", "_id"]);
};

UserSchema.statics.authenticate = async function({ email, password }) {
  if (!password) {
    throw new Error("Undefined argument `password`.");
  }

  const user = await this.findOne({ email }).populate("accounts");

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const isValid = await argon2.verify(user.password, password);
  if (!isValid) {
    throw new Error("Invalid email or password.");
  }

  return { user: user.toJSON(), account: user.defaultAccount.toJSON() };
};

export default createModel("User", UserSchema);
