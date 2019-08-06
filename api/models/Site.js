import mongoose from "mongoose";
import { _Schema, Types } from "./Schema";

const SiteSchema = new _Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  pages: [{ type: Types.ObjectId, ref: "Page" }]
});

export default mongoose.model("Site", SiteSchema);
