import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    content: {
      type: mongoose.Schema.Types.Mixed,
      required: [true, "Blog content is required"],
    },
    featuredImage: {
      type: String,
      default: "/aishiplogo.png",
      trim: true,
    },
    author: {
      type: String,
      default: "AI Shyp Squad",
      trim: true,
    },
    category: {
      type: String,
      default: "Logistics Automation",
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    readingTime: {
      type: String,
      default: "4 min read",
    },
    publishedDate: {
      type: Date,
      default: Date.now,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
