// controllers/marqueeController.js
import Marquee from "../models/marqueline.js";

// Get the current marquee text
export const getMarquee = async (req, res) => {
  try {
    const marquee = await Marquee.findOne();
    res.json(marquee);
  } catch (error) {
    res.status(500).json({ message: "Error fetching marquee text", error });
  }
};

// Add or update the marquee text
export const updateMarquee = async (req, res) => {
  try {
    const { text } = req.body;
    let marquee = await Marquee.findOne();

    if (marquee) {
      marquee.text = text;
      await marquee.save();
    } else {
      marquee = await Marquee.create({ text });
    }

    res.json(marquee);
  } catch (error) {
    res.status(500).json({ message: "Error updating marquee text", error });
  }
};
