import express from "express";
import { createServer } from "http";
import { port } from "../config";
import { getConfig } from "../utils";
import apollo from "./apollo-server";
import middlewares from "./middlewares";

const cors = getConfig("cors");
const app = express();

app.set("trust proxy", 1);
app.set("port", port);

app.use(middlewares);
apollo.applyMiddleware({ app, cors });

const http = createServer(app);
apollo.installSubscriptionHandlers(http);

export { app, http };
