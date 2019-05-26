import { Router, json, urlencoded } from "express";
import helmet from "helmet";
import cors from "./cors";

const middlewares = Router();

middlewares.use(helmet());
middlewares.use(cors);
middlewares.use(json());
middlewares.use(urlencoded({ extended: true }));

export default middlewares;
