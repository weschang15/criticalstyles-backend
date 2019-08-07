import mongoose from "mongoose";
import { _Schema, Types } from "./Schema";

const SiteSchema = new _Schema({
  name: {
    type: String,
    required: true
  },
  pages: [{ type: Types.ObjectId, ref: "Page" }],
  url: {
    type: String,
    required: true
  }
});

export default mongoose.model("Site", SiteSchema);
