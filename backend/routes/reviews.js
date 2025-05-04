import express from 'express';
import Review from '../models/reviewsModel.js';
import reviewValidationSchema from '../validation/reviewValidation.js';
import { responseValidationSchema } from '../validation/responseValidation.js';

const router = express.Router();

// GET ALL REVIEWS
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ reviewDate: -1 });
    res.status(200).json(reviews);
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
    res.status(200).json(review);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ code: 500, status: "Error fetching review" });
  }
});

// CREATE NEW REVIEW
router.post("/", async (req, res) => {
  try {
    // Validate request body BEFORE creating Mongoose model
    const validationResult = reviewValidationSchema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({
        code: 400,
        status: "Invalid request",
        error: validationResult.error.details
      });
    }

    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    console.log(`Backend error: ${err.message}`);
    res.status(500).json({
      code: 500,
      status: "Error creating review",
      error: err.message
    });
  }
});

// UPDATE REVIEW WITH OWNER RESPONSE
router.put('/:id', async (req, res) => {
  const { ownerResponse, ownerResponseDate } = req.body;

  if (!ownerResponse || !ownerResponseDate) {
    return res.status(400).json({ message: 'Invalid request: missing fields' });
  }

  const result = responseValidationSchema.validate({
    ownerResponse,
    ownerResponseDate
  });

  if (result.error) {
    return res.status(400).json({ message: 'Invalid owner response' });
  }

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { ownerResponse, ownerResponseDate },
      { new: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json(updatedReview);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Error updating review' });
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
