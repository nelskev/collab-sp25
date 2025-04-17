import Joi from "joi";
import mongoose from "mongoose";

// Define review Schema
const reviewSchema = new mongoose.Schema({
  name: { 
    type: String,
    maxlength: 20,
    minlength: 1,
    required: true 
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    maxlength: 250,
    minlength: 4,
    required: true 
  },
  reviewDate: {
    type: Date,
    default: Date.now
  },
  ownerResponse: {
    type: String,
    maxlength: 250,
    minlength: 4, 
    required: false,
    default: null,
  },
  ownerResponseDate: {
    type: Date,
    required: false,
    default: null,
  },
});

// Define Joi validation schema
/* const reviewJoiSchema = Joi.object({
  name: Joi.string().min(1).max(20).required(),
  rating: Joi.number().min(1).max(5).required(),
  comment: Joi.string().min(4).max(250).required(),
  reviewDate: Joi.date().allow(null),
  ownerResponse: Joi.string().min(4).max(250).allow(null, ""),
  ownerResponseDate: Joi.date().allow(null),
});

// Add static method to schema for validation
reviewSchema.statics.validate = function(obj) {
  return reviewJoiSchema.validate(obj);
};
*/

// Create Mongoose Model
const Review = mongoose.model("review", reviewSchema);

export default Review;
