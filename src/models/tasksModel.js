import mongoose, { Schema, model, models } from "mongoose";
const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  belongs_to: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "next-users",
  },
  priority: {
    type: String,
    enum: ["HIGH", "LOW", "MEDIUM", "CRITICAL"],
    required: true,
    default: "LOW",
  },
});

export default models["next-tasks"] || model("next-tasks", taskSchema);
