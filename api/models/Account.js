import pick from "lodash/pick";
import { createModel, Types, _Schema } from "./Utils";

const AccountSchema = new _Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  owner: { type: Types.ObjectId, ref: "User" },
  users: [{ type: Types.ObjectId, ref: "User" }]
});

AccountSchema.methods.toJSON = function() {
  return pick(this, ["name", "_id"]);
};

export default createModel("Account", AccountSchema);
