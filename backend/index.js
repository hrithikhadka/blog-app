const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use("/posts", (req, res) => {
  console.log("main url");
});

app.listen(port, () => console.log(`server started on port ${port}`));
