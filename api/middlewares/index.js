import { json, Router, urlencoded } from "express";
import helmet from "helmet";
import { isDev } from "../../config";
import hydrateAccount from "./auth/hydrateAccount";
import hydrateUser from "./auth/hydrateUser";
import cors from "./cors";
import logAccount from "./loggers/logAccount";
import logSession from "./loggers/logSession";
import logUrl from "./loggers/logUrl";
import logUser from "./loggers/logUser";
import session from "./session";

const middlewares = Router();

middlewares.use(helmet());
middlewares.use(cors);
middlewares.use(json());
middlewares.use(urlencoded({ extended: true }));
middlewares.use(session);
middlewares.use(hydrateUser);
middlewares.use(hydrateAccount);

if (isDev()) {
  middlewares.use(logUrl);
  middlewares.use(logSession);
  middlewares.use(logUser);
  middlewares.use(logAccount);
}

export default middlewares;
