import { createModel, Types, _Schema } from "./Utils";

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
  account: { type: Types.ObjectId, ref: "Account" },
  owner: { type: Types.ObjectId, ref: "User" }
});

SiteSchema.pre("deleteOne", async function() {
  const site = this;
  await Promise.all([Page.deleteMany({ site })]);
});

export default createModel("Site", SiteSchema);
