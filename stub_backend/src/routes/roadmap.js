import express from "express";
import { getRoadmapByName } from "../controller/roadmap.js";
const router = express.Router();

router.get("/:name", getRoadmapByName);

export default router;
