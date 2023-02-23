const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/posts", (req, res) => {
  console.log("main url");
});
app.listen("5000", () => {
  console.log("Backend is running");
});
