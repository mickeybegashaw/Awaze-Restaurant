import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import menuRoutes from "./Routes/menuRoute.js";
import userRouter from './Routes/userRoute.js'
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/menu", menuRoutes);
app.use("/api/user", userRouter);

mongoose
  .connect(process.env.MONGODB_URI)

  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is connected to DB and running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.error(error.message));
