import { createModel, _Schema, Types } from "./Utils";
import pick from "lodash/pick";

const AccountSchema = new _Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  owner: { type: Types.ObjectId, ref: "User" },
  users: [{ type: Types.ObjectId, ref: "User" }],
  sites: [{ type: Types.ObjectId, ref: "Site" }]
});

AccountSchema.methods.toJSON = function() {
  return pick(this, ["name", "_id"]);
};

export default createModel("Account", AccountSchema);
