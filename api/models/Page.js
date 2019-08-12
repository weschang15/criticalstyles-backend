import { createModel, _Schema, Types } from "./Utils";

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
    required: true,
    trim: true
  },
  stylesheet: StylesheetSchema,
  url: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
});

export default createModel("Page", PageSchema);
