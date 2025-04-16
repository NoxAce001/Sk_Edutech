// models/Marquee.js
import mongoose from "mongoose";

const MarqueeSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const Marquee = mongoose.model("Marquee", MarqueeSchema);

export default Marquee;
