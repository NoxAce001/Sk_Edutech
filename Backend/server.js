
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uploadRoutes = require("./routes/uploadRoutes");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", uploadRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


