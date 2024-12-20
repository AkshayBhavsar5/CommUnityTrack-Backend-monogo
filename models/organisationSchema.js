import mongoose from "mongoose";

const organisationSchema = new mongoose.Schema({
  organisationId: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  organisationName: {
    type: String,
    required: true,
  },
  organisationDescription: {
    type: String,
    required: true,
  },
});

export const Organisation = mongoose.model("Organisation", organisationSchema);
