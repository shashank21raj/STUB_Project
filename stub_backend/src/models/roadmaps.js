import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const roadmapsSchema = new Schema({
  title: { type: String, required: true },
  fn: { type: String, required: true },
});

const roadmapsModel = model("Roadmaps", roadmapsSchema);
export default roadmapsModel;
