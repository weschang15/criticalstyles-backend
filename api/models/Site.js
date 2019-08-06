import mongoose, { Schema } from "mongoose";

const SiteSchema = new Schema({
  name: String,
  url: String
});

export default mongoose.model("Site", SiteSchema);
