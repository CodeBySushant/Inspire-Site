const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const Image = require('./models/Images.js');
const Member = require('./models/Members.js');
const Alumni = require('./models/Alumnis.js');
const mongoose  = require('mongoose');
const path = require("path");
require('dotenv').config({ path: path.join(__dirname, '.env') });

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get("/", (req,res)=>{
  res.send("Backend running OK 🚀");
});

// DB
const dbUrl = process.env.ATLASDB_URL;

mongoose.connect(dbUrl)
.then(()=>console.log("Connected to DB successfully."))
.catch(err=>console.log(err));

// Routes
app.get("/gallery", async (req,res)=>{
  const imageData = await Image.find({});
  res.json(imageData);
});

app.get("/members", async (req,res)=>{
  const memberData = await Member.find({});
  res.json(memberData);
});

app.get("/alumni", async (req,res)=>{
  const alumniData = await Alumni.find({});
  res.json(alumniData);
});

app.listen(port, ()=>{
  console.log(`App running on ${port}`);
});
