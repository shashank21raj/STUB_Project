import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: { type: String, required: false },
  completed: { type: Boolean, default: false },
});

const TodoModel = model("Todo", todoSchema);
export default TodoModel;
