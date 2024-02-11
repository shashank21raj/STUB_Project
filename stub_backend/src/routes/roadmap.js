import express from "express";
const router = express.Router();

router.get("/:name", getRoadmapByName);

export default router;
