import { Router, json, urlencoded } from "express";
import helmet from "helmet";
import cors from "./cors";
import session from "./session";

const middlewares = Router();

middlewares.use(helmet());
middlewares.use(cors);
middlewares.use(json());
middlewares.use(urlencoded({ extended: true }));
middlewares.use(session);

export default middlewares;
