import express from "express";
import {
  getAllNotes,
  getNotesById,
  createNotes,
  updateNotes,
  deleteNotes,
} from "../controller/notes.js";
const router = express.Router();

router.post("/", getAllNotes);
router.get("/:id", getNotesById);
router.post("/t", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;
