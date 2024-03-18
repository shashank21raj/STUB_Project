import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todo", required: false }],
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notes", required: false }],
});

const UserModel = model("User", UserSchema);
export default UserModel;
