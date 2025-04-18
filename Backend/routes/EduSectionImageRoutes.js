
const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadImage } = require("../controllers/uploadController");
const {getRecentStudents,getRecentCenterImgs} = require("../controllers/EducationSection.controller")

const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("Image"), uploadImage);
router.get("/recentStudentImg" , getRecentStudents)
router.get("/recentCenterImg",getRecentCenterImgs)
module.exports = router;
