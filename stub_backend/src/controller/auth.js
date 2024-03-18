import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const SignUp = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await UserModel.create({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });
  const token = jwt.sign({ id: user.id }, process.env.JWT, {
    expiresIn: "9999 years",
  });
  return res.status(201).json({ token, user });
};

export const SignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      console.log("Invalid password");
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT, {
      expiresIn: "9999 years",
    });
    return res.status(200).json({ token, user });
  } catch (error) {
    console.log(error);
  }
};
