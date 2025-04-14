import mongoose from "mongoose";

// Define review Schema
const reviewSchema = new mongoose.Schema({
  // id: { type: Number, required: true },  // mongo doesn't use typical int id's, they are long strings
  //
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