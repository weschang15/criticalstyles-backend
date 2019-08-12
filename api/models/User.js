import argon2 from "argon2";
import pick from "lodash/pick";
import { createModel, _Schema, Types } from "./Utils";

const UserSchema = new _Schema({
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
  }
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

  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const isValid = await argon2.verify(user.password, password);
  if (!isValid) {
    throw new Error("Invalid email or password.");
  }

  return user.toJSON();
};

export default createModel("User", UserSchema);
