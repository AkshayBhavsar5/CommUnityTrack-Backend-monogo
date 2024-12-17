import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Todo Title is Require."],
    minLength: [4, "Title must contian at least 4 characters "],
  },
  description: {
    type: String,
    require: [true, "Todo description is Require."],
    minLength: [10, "description must contian at least 10 characters "],
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: [true, "User ID is require"],
  },
  userName: {
    type: String,
    ref: "User",
    require: [true, "User Name is require"],
  },
  // startDate: {},

  // endDate: {},
  // assignees: {
  //   type: Schema.Types.ObjectId,
  //   ref: ["User"],
  //   require: [true, "assignees is require"],
  // },
});

export const Task = mongoose.model("Task", taskSchema);

// start date , end date, assigni,status,prorities,relationship,tages
