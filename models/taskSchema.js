import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema(
  {
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
    assignedUsers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User", // Refers to the 'User' collection
        required: [true, "At least one User is required for assignment."],
      },
    ],
    startDate: {
      type: Date,
      require: [true, "Start Date is require"],
    },
    status: {
      type: String,
      require: [true, "status is Require."],
    },
    status: {
      type: String,
      require: [true, "status is Require."],
    },
    endDate: {
      type: Date,
      require: [true, "End Date is require"],
    },
    prorities: {
      type: String,
      require: [true, "prorities is Require."],
    },
    tages: {
      type: Array,
      require: [true, "tages is Require."],
    },
  },
  { timestamps: true }
);

export const Task = mongoose.model("Task", taskSchema);

// start date , end date, assigni,status,prorities,relationship,tages
