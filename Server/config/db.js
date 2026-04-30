const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  try {
    console.log("Trying DB connect..."); // 👈 ADD THIS

    if (isConnected) {
      console.log("Already connected");
      return;
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);

    isConnected = conn.connections[0].readyState;

    console.log("MongoDB Connected"); // 👈 MUST appear
  } catch (error) {
    console.error("FULL DB ERROR:", error); // 👈 keep this
  }
};

module.exports = connectDB;