import { Router, json, urlencoded } from "express";
import helmet from "helmet";
import cors from "./cors";
import session from "./session";
import hydrateUser from "./auth/hydrateUser";
import { isDev } from "../../config";
import logUser from "./loggers/logUser";
import logSession from "./loggers/logSession";

const middlewares = Router();

middlewares.use(helmet());
middlewares.use(cors);
middlewares.use(json());
middlewares.use(urlencoded({ extended: true }));
middlewares.use(session);
middlewares.use(hydrateUser);

if (isDev()) {
  middlewares.use(logSession);
  middlewares.use(logUser);
}

export default middlewares;
