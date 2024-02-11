import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const TodoModel = new model("Todo", todoSchema);
export default TodoModel;
