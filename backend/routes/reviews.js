import express from "express";
import Review from "../models/reviewsModel.js";

const router = express.Router();

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
      const result = review.joiValidate(req.body);
      if (result.error) {
        return res.status(400).json({ code: 400, status: "Invalid request", error: result.error.details });
      }
      await review.save();
      res.status(201).json(review);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ code: 500, status: "Error creating review" });
    }
  });
  

// UPDATE REVIEW 
router.put("/:id", async (req, res) => {
    try {
        const review = new Review(req.body);
        const result = review.joiValidate(req.body);
        if (result.error) {
            return res.status(400).json({ code: 400, status: "Invalid request", error: result.error.details });
        }
        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }  
        );
        if (!updatedReview) {
            return res.status(404).json({ status: "Review not found" });
        }
        res.status(200).json(updatedReview);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error updating review" });
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
