import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const notesSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
});

const NotesModel = model("Notes", notesSchema);
export default NotesModel;
