import { Router } from "express";
import { StylesheetController } from "../../../controllers/v1.0.0/stylesheet/StylesheetController";

const router = Router();

router.post("/", StylesheetController.post);

export default router;
