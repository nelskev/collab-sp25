import express from "express";
// import Review from "../models/reviewsModel.js";

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
 
export default router;
 