// const express = require("express");

// const multer = require("multer");
// const { uploadImage } = require("../controllers/uploadController");

// const router = express.Router();
// const upload = multer({ dest: "uploads/" });

// router.post("/upload", upload.single("image"), uploadImage);

// module.exports = router;

const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadImage } = require("../controllers/uploadController");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/upload", upload.single("Image"), uploadImage);

module.exports = router;
