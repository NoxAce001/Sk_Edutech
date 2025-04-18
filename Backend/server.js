

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uploadRoutes = require("./routes/EduSectionImageRoutes");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", uploadRoutes);

const PORT = process.env.PORT || 5000;

const DB_NAME = "SK_Edutech";
mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const imageRoutes = require("./routes/EduSectionImageRoutes");

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/homeimage" , imageRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


