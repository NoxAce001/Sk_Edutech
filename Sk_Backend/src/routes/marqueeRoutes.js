// routes/marqueeRoutes.js
import express from "express";
import { getMarquee, updateMarquee } from "../controllers/marqueController.js";

const router = express.Router();

router.get("/", getMarquee);
router.post("/", updateMarquee);

export default router;
