const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(
      `${process.env.MONGO_URL}`,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("mongodb is connected");
      }
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
