import mongoose from "mongoose";

// Define review Schema
const reviewSchema = new mongoose.Schema({

  name: { type: String, required: true },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: { type: String, required: true },
  reviewDate: { type: Date, default: Date.now },
  ownerResponse: {
    type: String,
    maxlength: 250,
    minlength: 50,
    required: false,
    default: null,
  },
  ownerResponseDate: {
    type: Date,
    required: false,
    default: null,
  },
});

// Create Mongoose Model
const Review = mongoose.model("review", reviewSchema);

export default Review;
