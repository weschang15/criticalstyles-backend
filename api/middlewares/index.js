import { Router, json, urlencoded } from "express";
import helmet from "helmet";
import cors from "./cors";
import session from "./session";
import { isDev } from "../../config";
import logSession from "./loggers/logSession";
import logUser from "./loggers/logUser";
import logUrl from "./loggers/logUrl";
import logAccount from "./loggers/logAccount";
import hydrateUser from "./auth/hydrateUser";
import hydrateAcc from "./auth/hydrateAcc";

const middlewares = Router();

middlewares.use(helmet());
middlewares.use(cors);
middlewares.use(json());
middlewares.use(urlencoded({ extended: true }));
middlewares.use(session);
middlewares.use(hydrateUser);

if (isDev()) {
  middlewares.use(logUrl);
  middlewares.use(logSession);
  middlewares.use(logUser);
  middlewares.use(logAccount);
}

export default middlewares;
