const mongoose = require('mongoose');

// 👉 Local ke liye tum direct URI use kar sakti ho,
// lekin deployment ke liye environment variable use karo
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/inotebook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI); // options ki zarurat nahi hai
    console.log("✅ Connected to Mongo Successfully!");
  } catch (error) {
    console.error("❌ Mongo Connection Error:", error.message);
    process.exit(1); // agar error ho to process exit
  }
};

module.exports = connectToMongo;