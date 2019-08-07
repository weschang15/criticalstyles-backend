import mongoose from "mongoose";
import { _Schema, Types } from "./Schema";

const StylesheetSchema = new _Schema({
  styles: {
    type: String,
    required: true
  },
  info: {
    minifiedSize: Types.Decimal128,
    originalSize: Types.Decimal128,
    viewport: [Number]
  }
});

const PageSchema = new _Schema({
  name: {
    type: String,
    required: true
  },
  stylesheet: StylesheetSchema,
  url: {
    type: String,
    required: true,
    unique: true
  }
});

export default mongoose.model("Page", PageSchema);
