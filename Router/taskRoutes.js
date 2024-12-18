import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  createTasks,
  editTodo,
  getTask,
  getAllTasks,
  deleteTask,
} from "../Controller/taskController.js";

const router = express.Router();

router.post("/add", isAuthenticated, createTasks);
router.put("/edit/:id", isAuthenticated, editTodo);
router.get("/tasks/:id", isAuthenticated, getTask);
router.get("/tasks", isAuthenticated, getAllTasks);
router.delete("/delete/:id", isAuthenticated, deleteTask);

export default router;
