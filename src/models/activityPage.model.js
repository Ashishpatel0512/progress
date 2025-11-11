import mongoose from "mongoose";

const ActivityPageSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    ActivityPageID: {
      type: Number,
      default: 0,
    },
    pageName: {
      type: String,
      required: true,
    },
    Percent: {
      type: Number,
      default: 0,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // auto add createdAt, updatedAt
  }
);

export default mongoose.model("ActivityPage", ActivityPageSchema);
