import Joi from "joi";
import mongoose from "mongoose";
// const joi = require("joi");

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



// Define review Schema
// const reviewSchema = new mongoose.Schema({
  reviewSchema.methods.joiValidate= function(obj) {
    var schema = {
    name: Joi.string().min(3).max(50).required(),
    rating: Joi.integer().min(1).max(5).required(),
    comment: Joi.string().min(3).max(500).required(),
    reviewDate: Joi.date(),
    ownerResponse: Joi.string().allow(null, ""),
    ownerResponseDate: Joi.date().allow(null),
  }
  return Joi.validate(obj, schema);
};

// Create Mongoose Model
const Review = mongoose.model("review", reviewSchema);

export default Review;