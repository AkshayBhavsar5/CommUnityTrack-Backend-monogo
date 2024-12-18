import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnection from "./Database/dbConntection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./Router/userRoutes.js";
import taskRouter from "./Router/taskRoutes.js";

const app = express();
dotenv.config({ path: "./config/.env" });

app.use(
  cors({
    origin: [process.env.DASHBORAD_URL, process.env.DASHBORAD_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

dbConnection();
app.use(errorMiddleware);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/task", taskRouter);

export default app;
