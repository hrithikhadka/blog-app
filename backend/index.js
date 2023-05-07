const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");
const port = process.env.PORT || 5000;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const session = require("express-session");

const salt = bcrypt.genSaltSync(10);
const secretKey = "abhitj97i5tki4lodu2s340wswer";

app.use(express.json());
app.use(cookieParser());

app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://blog:blog@cluster0.ny7sbff.mongodb.net/?retryWrites=true&w=majority"
);

// app.use(
//   session({
//     resave: false,
//     saveUninitialized: false,
//     secret: "session",
//     cookie: {
//       maxAge: 1000 * 60 * 60,
//       sameSite: "None",
//       secure: true,
//     },
//   })
// );

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDocument = await User.findOne({ username });

  // res.json(userDocument);
  const passwordMatch = bcrypt.compareSync(password, userDocument.password);
  if (passwordMatch) {
    jwt.sign(
      { username: userDocument.username, id: userDocument._id },
      secretKey,
      {},
      (er, token) => {
        if (er) throw er;
        res.cookie("token", token).json({ id: userDocument._id, username });
      }
    );
  } else {
    res.status(400).json("Wrong Credentials!");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  console.log(req.cookies);
  if (token) {
    jwt.verify(token, secretKey, {}, (er, info) => {
      if (er) throw er;
      // const { username, _id } = await User.findById(info.id);
      res.json(info);
    });
  } else {
    res.json(null);
  }
});

app.post("/logout", (req, res) => {
  // res.clearCookie("token");
  res.cookie("token", "");
  res.send("cookie cleared");
});

app.post("/post", upload.single("image"), async (req, res) => {
  // console.log(req.file);
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const fileExt = parts[parts.length - 1];
  const newPath = `uploads/${req.file.filename}.${fileExt}`;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;
  jwt.verify(token, secretKey, {}, async (er, info) => {
    if (er) throw er;
    const { title, summary, content, author } = req.body;
    const postData = await Post.create({
      title,
      summary,
      content,
      photo: newPath,
      author: info.id,
    });
    res.json(postData);
    // res.json(info);
    // res.json({ title, summary, content });
  });
});

app.get("/posts", async (req, res) => {
  const posts = await Post.find().populate("author", ["username"]);
  res.json(posts);
});

app.get("/", (req, res) => {
  res.json("hello");
});
app.listen(port, () => console.log(`server started on port ${port}`));
