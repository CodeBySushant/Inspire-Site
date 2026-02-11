const express = require("express");
const app = express();
const cors = require("cors");
const Image = require("./models/Images.js");
const Member = require("./models/Members.js");
const Alumni = require("./models/Alumnis.js");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

// Serve frontend build (optional)
app.use(express.static(path.join(__dirname, "../client/dist")));

// Allow all origins (production safe for now)
app.use(cors({ origin: "*" }));

// ---------------- HEALTH CHECK ----------------
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// ---------------- DATABASE ----------------

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ---------------- API ROUTES ----------------

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

const PORT = process.env.PORT;

if (!PORT) {
  console.error("❌ Railway PORT missing");
  process.exit(1);
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
