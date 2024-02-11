import express from "express";
const router = express.Router();

router.get("/", getAllPlacement);
router.get("/:id", getPlacementById);
router.post("/", createPlacement);
router.put("/:id", updatePlacement);
router.delete("/:id", deletePlacement);

export default router;
