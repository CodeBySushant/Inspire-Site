const express = require("express");
const app = express();
const cors = require("cors");
const Image = require("./models/Images.js");
const Member = require("./models/Members.js");
const Alumni = require("./models/Alumnis.js");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

// Serve frontend build (optional if you deploy frontend separately)
app.use(express.static(path.join(__dirname, "../client/dist")));

// CORS (allow all for now)
app.use(cors({ origin: "*" }));

// Railway PORT
const PORT = process.env.PORT || 8080;

// MongoDB URI from Railway Variables
const dbUrl = process.env.MONGO_URI;

// ---------------- CONNECT DATABASE ----------------
mongoose
  .connect(dbUrl)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ---------------- ROUTES ----------------

app.get("/gallery", async (req, res) => {
  try {
    const imageData = await Image.find({});
    res.json(imageData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

app.get("/members", async (req, res) => {
  try {
    const memberData = await Member.find({});
    res.json(memberData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch members" });
  }
});

app.get("/alumni", async (req, res) => {
  try {
    const alumniData = await Alumni.find({});
    res.json(alumniData);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch alumni" });
  }
});

// ---------------- START SERVER ----------------

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
