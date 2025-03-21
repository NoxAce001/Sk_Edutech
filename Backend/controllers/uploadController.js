const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

cloudinary.config({
    cloud_name: "dsnd3sa2d",
    api_key: "383315855981714",
    api_secret: "bwCfI6f6lZyTiFdeHZQFypYs68w",
  });
  
//   CLOUDINARY_CLOUD_NAME=dsnd3sa2d
// CLOUDINARY_API_KEY=383315855981714
// CLOUDINARY_API_SECRET=bwCfI6f6lZyTiFdeHZQFypYs68w

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
