const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./models/User");
const port = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://blog:blog@cluster0.ny7sbff.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.create({ username, password });
  res.json(userDoc);
});

app.listen(port, () => console.log(`server started on port ${port}`));
