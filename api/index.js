import express from "express";
import { createServer } from "http";
import { port } from "../config";
import { getConfig } from "../utils";
import apollo from "./apollo-server";
import middlewares from "./middlewares";
import routes from "./routes";

const cors = getConfig("cors");
const app = express();

app.set("trust proxy", 1);
app.set("port", port);

app.use(middlewares);
app.use("/api", routes);
apollo.applyMiddleware({ app, cors });

const http = createServer(app);
apollo.installSubscriptionHandlers(http);

export { app, http };
