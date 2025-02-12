const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(express.json());

app.use(cors());

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://azhaguazhagu30:j2oW5hkGVUwR2tG7@cluster0.ipwnl5f.mongodb.net/Agency?retryWrites=true&w=majority&appName=Cluster0"
  );

// Contact Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Contact = mongoose.model("Contactagency", ContactSchema);

// API Routes
app.post("/contact", async (req, res) => {
 const {name,email,message} = req.body
  const contact = new Contact({name:name,email:email,message:message})
  await contact.save()
  res.json({ message: "Message Sent!" });
});

app.listen(3000, () => console.log("Server running on port 6000"));
