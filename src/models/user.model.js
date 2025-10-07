// models/User.js
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    avatar: {
      type: String, // Cloudinary or file URL
      required: true,
    },
    coverImage: {
      type: String, 
    },
    password: {
      type: String,
      required: [true,'Password is required '],
      minlength: 6,
      select: false, // password won’t be re  turned in queries
    },
    refreshToken: {
      type: String,
    },
    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);

//  Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//  Compare entered password with hashed password
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//  Generate Access Token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    { id: this._id, email: this.email, username: this.username },
    process.env.JWT_ACCESS_SECRET,
    { expiresIn: process.env.JWT_ACCESS_EXPIRES || "15m" }
  );
};

// Generate Refresh Token
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    { 
        _id: this._id },
    process.env.JWT_REFRESH_SECRET,
    { 
        expiresIn: process.env.JWT_REFRESH_EXPIRES || "7d" 
    }
  );
};
export const User = mongoose.model("User", userSchema);
