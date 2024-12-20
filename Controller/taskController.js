import { Task } from "../models/taskSchema.js";
import { User } from "../models/userSchema.js";

export const createTasks = async (req, res, next) => {
  const {
    title,
    description,
    startDate,
    endDate,
    assignedUsers,
    status,
    prorities,
    tages,
  } = req.body;
  // const users = await User.find();
  const userId = req.user._id;
  // const assignedUsers = users.map((user) => user._id);

  if (
    !title ||
    !description ||
    !startDate ||
    !endDate ||
    !status ||
    !prorities ||
    !tages
  ) {
    return next(
      res.status(400).json({
        success: false,
        message: "please provide all fileds",
      })
    );
  }
  const task = await Task.create({
    title,
    description,
    userId,
    assignedUsers,
    startDate,
    endDate,
    status,
    prorities,
    tages,
  });

  const result = task.toJSON();
  res.status(200).json({
    success: true,
    message: "Task Created Succesfully",
    data: result,
  });
};

export const editTodo = async (req, res, next) => {
  const userId = req.user?._id;
  const { id } = req.params;

  const newtaskdata = {
    title: req.body.title,
    description: req.body.description,
    userId: req.body.userId || userId,
    assignedUsers: req.body.assignedUsers,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    status: req.body.status,
    prorities: req.body.prorities,
    tages: req.body.tages,
  };

  try {
    const task = await Task.findByIdAndUpdate(id, newtaskdata, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    if (!task) {
      return res.status(400).json({
        error: "todo can't found",
      });
    }

    return res.status(201).json({
      status: "success",
      message: "todo updated successfully ",
      task,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    // Find the task by ID
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Task retrieved successfully",
      task,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMyTask = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const task = await Task.find({ assignedUsers: userId }).populate(
      "assignedUsers",
      "userName"
    );
    res.status(200).json({ task });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tasks", error: error.message });
  }
};

export const getAllTasks = async (req, res, next) => {
  try {
    // Fetch all tasks from the database
    const tasks = await Task.find();

    // Check if tasks exist
    if (!tasks || tasks.length === 0) {
      return res.status(404).json({
        error: "No tasks found",
      });
    }

    // Respond with the list of tasks
    return res.status(200).json({
      status: "success",
      message: "Tasks retrieved successfully",
      tasks,
    });
  } catch (err) {
    // Handle errors (e.g., database issues)
    res.status(500).json({ error: err.message });
  }
};

export const deleteTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Task deleted successfully",
      task,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
