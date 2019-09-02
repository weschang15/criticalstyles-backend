import { createModel, Types, _Schema } from "./Utils";

const PageSchema = new _Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  stylesheet: {
    styles: {
      type: String
    },
    stats: {
      minifiedSize: Number,
      originalSize: Number,
      viewport: [Number]
    }
  },
  url: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  site: { type: Types.ObjectId, ref: "Site" }
});

export default createModel("Page", PageSchema);
