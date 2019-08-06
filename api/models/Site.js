import mongoose, { Schema } from "mongoose";

const SiteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  pages: [{ type: Schema.Types.ObjectId, ref: "Page" }]
});

export default mongoose.model("Site", SiteSchema);
