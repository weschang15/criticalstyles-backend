import { createModel, _Schema, Types } from "./Utils";

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

export default createModel("Account", AccountSchema);
