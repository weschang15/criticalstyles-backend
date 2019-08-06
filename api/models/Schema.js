import { Schema } from "mongoose";

export const Types = Schema.Types;

export function _Schema(definition = {}, options = {}) {
  return new Schema(definition, { timestamps: true, ...options });
}
