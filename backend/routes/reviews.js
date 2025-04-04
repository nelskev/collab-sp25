import express from "express";
import Review from "../models/reviewsModel.js";

const router = express.Router();


// GET All Reviews   (setup schema/model first!)
router.get("/", async (req, res) => {
    try {
        const reviews = await Review.find(); 
        res.json(reviews);  
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
        res.json(review);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error fetching review" });
    }
});

// POST NEW REVIEW
router.post("/", async (req, res) => {
    const { name, rating, description } = req.body; 
    console.log('POST request received at /employees');
    console.log('Request body:', req.body);
    try {
        const newReview = new Review({ name, rating, description });  
        await newReview.save();  
        res.status(201).json(newReview);  
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error saving review" });
    }
});


// UPDATE REVIEW 
router.put("/:id", async (req, res) => {
    const { name, rating, description } = req.body;
    try {
        const updatedReview = await Review.findByIdAndUpdate(
            req.params.id,
            { name, rating, description },
            { new: true }  
        );
        if (!updatedReview) {
            return res.status(404).json({ status: "Review not found" });
        }
        res.json({ status: `${updatedReview.name} has been updated` });
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
        res.json({ status: `Review "${deletedReview.name}" deleted` });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ code: 500, status: "Error deleting review" });
    }
});

export default router;
 
 
