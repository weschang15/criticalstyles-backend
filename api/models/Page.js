import mongoose, { Schema } from "mongoose";

const StylesheetSchema = new Schema({
  styles: {
    type: String,
    required: true
  },
  info: {
    minifiedSize: Schema.Types.Decimal128,
    originalSize: Schema.Types.Decimal128,
    viewport: [Number]
  }
});

const PageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  stylesheet: StylesheetSchema
});

export default mongoose.model("Page", PageSchema);
