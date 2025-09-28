import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    videoFile: {
      type: String,
      required: [true, "Video file URL is required"],
    },
    thumbnail: {
      type: String,
      required: [true, "Thumbnail image is required"],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    title: {
      type: String,
      required: [true, "Video title is required"],
      trim: true,
      maxlength: 150,
    },
    description: {
      type: String,
      maxlength: 5000,
    },
    duration: {
      type: Number, 
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true } 
);

export const Video = mongoose.model("Video", videoSchema);
