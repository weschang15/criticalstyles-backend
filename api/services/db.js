import mongoose from "mongoose";
import { getConfig } from "../../utils";

const config = getConfig("mongo");

mongoose.connect(config.uri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connection.on("error", err => {
  console.error(`🚫 🚫 🚫 → ${err.message}`);
});
