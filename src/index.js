import express from "express";
import { connectDB } from "./db/index.js"; // DB connection
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

console.log("PORT:", process.env.PORT);
console.log("MONGODB_URI:", process.env.MONGODB_URI);

// Middleware (optional)
app.use(express.json());

// Connect to MongoDB and start server
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(` Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection failed!!!", err);
  });
