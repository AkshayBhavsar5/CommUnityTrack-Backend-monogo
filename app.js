import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnection from "./Database/dbConntection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./Router/userRoutes.js";
import taskRouter from "./Router/taskRoutes.js";
import organisaitonRouter from "./Router/organisationRoutes.js";
import bodyParser from "body-parser";

const app = express();

dotenv.config({ path: "./config/.env" });
// Configure CORS
app.use(
  cors({
    origin: process.env.DASHBOARD_URL, // Replace with frontend URL
    methods: ["GET", "POST", "DELETE", "PUT"], // Allowed methods
    credentials: true, // Allow cookies and credentials
  })
);

// Handle preflight requests
app.options(
  "*",
  cors({
    origin: process.env.DASHBOARD_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
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
app.use("/api/v1/organisation", organisaitonRouter);

export default app;
