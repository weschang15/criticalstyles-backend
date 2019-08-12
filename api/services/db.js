import mongoose from "mongoose";
import { getConfig } from "../../utils";
const config = getConfig("mongo");

mongoose
  .connect(config.uri, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => {
    console.log(`Mongoose is connected`);
  })
  .catch(err => {
    console.error(`🚫 🚫 🚫 → ${err.message}`);
  });
