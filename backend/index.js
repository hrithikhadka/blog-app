const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.json({ registerData: { username, password } });
});

app.listen(port, () => console.log(`server started on port ${port}`));
