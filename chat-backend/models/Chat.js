import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  ip: String,
  country: String,
  messages: [
    {
      role: String,
      text: String,
      time: String
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Chat", ChatSchema);
