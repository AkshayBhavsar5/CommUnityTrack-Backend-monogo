import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { createTasks } from "../Controller/taskController.js";

const router = express.Router();

router.post("/add", isAuthenticated, createTasks);

export default router;
