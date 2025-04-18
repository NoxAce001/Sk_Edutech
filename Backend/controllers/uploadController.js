// const cloudinary = require("../config/cloudinary");
// const multer = require("multer");
// const ImageModel = require("../models/ImageModel");

// // Multer storage config (store file in memory)
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // Upload Image to Cloudinary & Save in MongoDB
// exports.uploadImage = async (req, res) => {
//   try {
//     // Ensure file exists
//     if (!req.file) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }

//     // Upload to Cloudinary
//     const result = await cloudinary.uploader.upload_stream(
//       { folder: "upload" },
//       async (error, result) => {
//         if (error) return res.status(500).json({ error: "Upload failed" });

//         // Save image details to MongoDB
//         const newImage = new ImageModel({
//           name: req.body.name,
//           imageUrl: result.secure_url
//         });

//         await newImage.save();
//         res.status(201).json({ message: "Image uploaded successfully!", data: newImage });
//       }
//     );

//     // Pipe file to Cloudinary
//     req.file.stream.pipe(result);
//   } catch (error) {
//     console.error("Error uploading image:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// Fetch All Uploaded Images
// exports.getImages = async (req, res) => {
//   try {
//     const images = await ImageModel.find();
//     res.json(images);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching images" });
//   }
// };



// const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const cloudinary = require("../utils/cloudinary");

// cloudinary.config({
//     cloud_name: "dsnd3sa2d",
//     api_key: "383315855981714",
//     api_secret: "bwCfI6f6lZyTiFdeHZQFypYs68w",
//   });
  


exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    let streamUpload = (file) => {
      return new Promise((resolve, reject) => {
        console.log("uContro20")
        let stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) resolve(result);
          else reject(error);
        console.log("uContro24")

        });
        streamifier.createReadStream(file.buffer).pipe(stream);
      });
    };

    let result = await streamUpload(req.file);
    res.json({ url: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload failed" });
  }
};




// const Image = require("../models/ImageModel");
// const cloudinary = require("../utils/cloudinary");
// const fs = require("fs");

// exports.uploadImage = async (req, res) => {
//   try {
//     const { name } = req.body;
//     const file = req.file;

//     if (!name || !file) {
//       return res.status(400).json({ error: "Name and image are required" });
//     }

//     // Upload image to Cloudinary
//     const uploadedImage = await cloudinary.uploader.upload(file.path, {
//       folder: "uploads",
//     });

//     // Save to MongoDB
//     const newImage = await Image.create({
//       name,
//       imageUrl: uploadedImage.secure_url,
//     });

//     // Delete local file after successful upload
//     fs.unlinkSync(file.path);

//     res.status(201).json(newImage);
//   } catch (error) {
//     console.error("Upload Error:", error);
//     res.status(500).json({ error: error.message || "Internal Server Error" });
//   }
// };



// const Image = require("../models/ImageModel");
// const cloudinary = require("../utils/cloudinary");

// exports.uploadImage = async (req, res) => {
//   try {
//     const { name } = req.body;
//     const file = req.file;

//     if (!name || !file) {
//       return res.status(400).json({ error: "Name and image are required" });
//     }

//     const uploadedImage = await cloudinary.uploader.upload(file.path, {
//       folder: "uploads",
//     });

//     const newImage = await Image.create({
//       name,
//       imageUrl: uploadedImage.secure_url,
//     });

//     res.status(201).json(newImage);
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// };
