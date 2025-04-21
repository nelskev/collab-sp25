import express from 'express';
import Review from '../models/reviewsModel.js';
import reviewValidationSchema from '../validation/reviewValidation.js';
import { responseValidationSchema } from '../validation/responseValidation.js';

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

/*
// Add new review
router.post('/', async (req, res) => {
  const { name, comment, rating, reviewDate } = req.body;

  const newReview = new Review({
    name,
    comment,
    rating,
    reviewDate: reviewDate || new Date().toISOString(),
  });

  try {
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
*/

// GET All Reviews
router.get("/", async (req, res) => {
    try {
        const reviews = await Review.find(); 
        return res.status(200).json(reviews);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error fetching reviews" });
    }
    
});

// GET REVIEW BY ID
router.get("/:id", async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);  
        if (!review) {
            return res.status(404).json({ status: "Review not found" });
        }
        return res.status(200).json(review);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error fetching review" });
    }
});


router.post("/", async (req, res) => {
    try {
      const review = new Review(req.body);
      const validationResult = reviewValidationSchema.validate(review);
      if (validationResult.error) {
        return res.status(400).json({ code: 400, status: "Invalid request", error: validationResult.error.details });
      }

      if (result.error) {
        return res.status(400).json({ code: 400, status: "Invalid request", error: result.error.details });
      }
      await review.save();
      res.status(201).json(review);
    } catch (err) {
      console.log(`backend error of ${err.message}`);
      res.status(500).json({ code: 500, status: "Error creating review", error: err.message });
    }
  });
  


// UPDATE REVIEW
router.put('/:id', async (req, res) => {
    const reviewId = req.params.id;
    const { ownerResponse, ownerResponseDate } = req.body;
  
    if (!reviewId || !ownerResponse || !ownerResponseDate) {
      res.status(400).send({ message: 'Invalid request' });
      return;
    }
  
    const result = responseValidationSchema.validate({
      ownerResponse: ownerResponse,
      ownerResponseDate: ownerResponseDate,
    });
  
    if (result.error) {
      res.status(400).send({ message: 'Invalid owner response' });
      return;
    }
  
    try {
        const review = await Review.findByIdAndUpdate(reviewId, {
          ownerResponse: ownerResponse,
          ownerResponseDate: ownerResponseDate,
        }, { new: true });
        res.send(review);
      } catch (err) {
        res.status(500).send({ message: 'Error updating review' });
      }
  });
  

// DELETE REVIEW
router.delete("/:id", async (req, res) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.id);
        if (!deletedReview) {
            return res.status(404).json({ status: "Review not found" });
        }
        res.status(200).json({ status: `Review "${deletedReview.name}" deleted` });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error deleting review" });
    }
});


export default router;

