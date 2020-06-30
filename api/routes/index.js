import { Router } from "express";
import V1_ROUTES from "./v1.0.0";
const routes = Router();

routes.use("/v1.0.0", V1_ROUTES);

export default routes;
