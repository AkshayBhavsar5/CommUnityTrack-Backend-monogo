import { Task } from "../models/taskSchema.js";

export const createTasks = async (req, res, next) => {
  const { title, description } = req.body;
  const userId = req.user._id;

  if (!title || !description) {
    return next(
      res.status(400).json({
        success: false,
        message: "please provide both title and description",
      })
    );
  }
  const task = await Task.create({ title, description, userId });

  const result = task.toJSON();
  res.status(200).json({
    success: false,
    message: "Task Created Succesfully",
    data: result,
  });
};
