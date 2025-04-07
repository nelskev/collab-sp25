import express from 'express';
import Review from '../models/reviewsModel.js';

const router = express.Router();

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new review
router.post('/', async (req, res) => {
  const { name, comment, rating, response } = req.body;

  const newReview = new Review({
    name,
    comment,
    rating,
    response
  });

  try {
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
