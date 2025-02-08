import express from "express";
import upload from "../middleware/multer.js"
import { uploadXml,getReport } from "../controllers/xmlController.js";

const router = express.Router();

router.post("/upload",upload.single('file'),uploadXml);
router.get("/reports",getReport);

export default router;