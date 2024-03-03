import mongoose from "mongoose";

const schema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "username is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

export default mongoose.models["next-users"] ||
  mongoose.model("next-users", schema);
