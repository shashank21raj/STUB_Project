import express from "express";
import {
  updateNotes,
  updateTodos,
  deleteNote,
  deleteTodo,
} from "../controller/user.js";
const router = express.Router();

router.put("/notes/:id", updateNotes);
router.put("/todo/:id", updateTodos);
router.put("/notes/d/:id", deleteNote);
router.put("/todo/d/:id", deleteTodo);

export default router;
