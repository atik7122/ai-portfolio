import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userMessage: String,
  aiReply: String,
  country: String,
  time: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Chat", chatSchema);
