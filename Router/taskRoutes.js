import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  createTasks,
  editTodo,
  getTask,
  getAllTasks,
  deleteTask,
  getMyTask,
} from "../Controller/taskController.js";

const router = express.Router();

router.post("/add", isAuthenticated, createTasks);
router.put("/edit/:id", isAuthenticated, editTodo);
router.get("/get-task/:id", isAuthenticated, getTask);
router.get("/tasks", isAuthenticated, getAllTasks);
router.delete("/delete/:id", isAuthenticated, deleteTask);
router.get("/tasks/my-tasks/:userId", getMyTask);

export default router;
