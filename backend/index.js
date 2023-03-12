const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./models/User");
const port = process.env.PORT || 5000;
const bcrypt = require("bcrypt");

dotenv.config();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://blog:blog@cluster0.ny7sbff.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDocument = await User.findOne({ username });
  // res.json(userDocument);
  const passwordMatch = bcrypt.compareSync(password, userDocument.password);
  res.json(passwordMatch);
});

app.listen(port, () => console.log(`server started on port ${port}`));
