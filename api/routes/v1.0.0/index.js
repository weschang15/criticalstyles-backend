import { Router } from "express";
import requireApiKey from "../../middlewares/auth/requireApiKey";
import validateApiKey from "../../middlewares/auth/validateApiKey";
import StylesheetRoutes from "./stylesheet/routes";

const router = Router();

router.use("/stylesheet", requireApiKey, validateApiKey, StylesheetRoutes);

export default router;
