import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const placementSchema = new Schema({
  title: { type: String, required: true },
  employeeType: { type: String, required: true },
  company: { type: String, required: true },
  doj: {
    type: Date,
    required: true,
  },
  dol: { type: Date },
  description: { type: String },
});

const placementModel = model("Placement", placementSchema);
export default placementModel;
