import mongoose from "mongoose";
import { getConfig } from "../../utils";

export const DatabaseError = mongoose.Error;

export function db() {
  const config = getConfig("mongo");

  mongoose
    .connect(config.uri, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => {
      console.log(`Mongoose is connected`);
    })
    .catch(err => {
      console.error(`🚫 🚫 🚫 → ${err.message}`);
    });
}
