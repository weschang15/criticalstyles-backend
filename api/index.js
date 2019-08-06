import express from "express";
import { createServer } from "http";
import apollo from "./apollo-server";
import middlewares from "./middlewares";
import { getConfig } from "../utils";
import config from "../config";

// Database connection
import "./services/db";
// Mongoose models
import "./models";

const { port } = config;
const cors = getConfig("cors");
const app = express();

app.set("trust proxy", 1);
app.set("port", port);

app.use(middlewares);
apollo.applyMiddleware({ app, cors });

const http = createServer(app);
apollo.installSubscriptionHandlers(http);

export { app, http };
