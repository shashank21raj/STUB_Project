import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import methodOverride from "method-override";

import authRoute from "./src/routes/auth.js";
import todoRoute from "./src/routes/todo.js";
import notesRoute from "./src/routes/notes.js";
import roadmapRoute from "./src/routes/roadmap.js";
import placementRoute from "./src/routes/placement.js";
import userRoute from "./src/routes/user.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const mongo_url = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/STUB";

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoute);
app.use("/todo", todoRoute);
app.use("/notes", notesRoute);
app.use("/roadmap", roadmapRoute);
app.use("/placement", placementRoute);
app.use("/user", userRoute);

mongoose
  .connect(mongo_url)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is listening on ${PORT}`);
      console.log("Database is connected");
    });
  })
  .catch((err) => {
    console.log(err);
  });
