import { createModel, _Schema, Types } from "./Utils";

const SiteSchema = new _Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    slug: "name",
    unique: true
  },
  pages: [{ type: Types.ObjectId, ref: "Page" }],
  owner: { type: Types.ObjectId, ref: "User" }
});

export default createModel("Site", SiteSchema);
