import express from "express";
import {
  getAllTodo,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} from "../controller/todo.js";
const router = express.Router();

router.post("/", getAllTodo);
router.get("/:id", getTodoById);
router.post("/t", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
