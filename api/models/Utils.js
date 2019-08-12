import mongoose, { Schema } from "mongoose";

export const Types = Schema.Types;
export const DatabaseError = mongoose.Error;

export function _Schema(definition = {}, options = {}) {
  return new Schema(definition, { timestamps: true, ...options });
}

export function createModel(modelName, modelSchema) {
  return mongoose.model(modelName, modelSchema);
}
