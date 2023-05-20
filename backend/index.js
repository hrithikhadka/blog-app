const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/Register");
const postRoute = require("./routes/post");
const profileRoute = require("./routes/profile");
const postsRoute = require("./routes/posts");
// const logoutRoute = require("./routes/logout");

const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));

mongoose.set("strictQuery", true);
//connect to db
mongoose.connect(
  "mongodb+srv://blog:blog@cluster0.ny7sbff.mongodb.net/?retryWrites=true&w=majority"
);

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/post", postRoute);
app.use("/profile", profileRoute);
app.use("/posts", postsRoute);
// app.use("/logout", logoutRoute);

//logout user
app.post("/logout", (req, res) => {
  // res.clearCookie("token");
  res.cookie("token", "");
  res.send("cookie cleared");
});

app.get("/", (req, res) => {
  res.json("hello");
});
app.listen(port, () => console.log(`server started on port ${port}`));
