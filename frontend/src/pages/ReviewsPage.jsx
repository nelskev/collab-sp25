import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';

//initialize array of reviews objects with some sample content
export default function ReviewsPage() {
  // Store reviews from the server
  const [reviews, setReviews] = useState([]);
  // Store new reviews (name, rating, comment and date)
  const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '',  reviewDate: new Date().toISOString()});

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('http://localhost:8000/reviews');
        const data = await res.json();
        // Sorts the reviews by date to the latest 5
        const sortedReviews = data.sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate)).slice(0, 5);
        setReviews(sortedReviews); 
      } catch (err) {
        // Log error if fetching fails
        console.error('Could not load reviews:', err);
      }
    };
    fetchReviews(); 
  }, []); // Empty dependency array so it only runs once

  // Handles rating change
  const handleRating = (rate) => {
    setNewReview({ ...newReview, rating: rate }); // Update rating
  };

  // Submits for new reviews
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents page reload
    // Validates all fields are filled
    if (newReview.name && newReview.rating && newReview.comment) {
      try {
        // Send the new review to the server
        const response = await fetch('http://localhost:8000/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newReview),
        });
        const data = await response.json();
        if (data) {
          // Adds new review to the reviews list and resets form
          setReviews([data, ...reviews]);
          setNewReview({ name: '', rating: 0, comment: '',  reviewDate: new Date().toISOString() });
        }
      } catch (error) {
        // Log any errors during submission
        console.error('Could not submit review:', error);
      }
    }
  };

  return (
    <div className="container section-3">
      <h1 className="custom-blue mb-4">Leave a Review</h1>

      <div className="row">
        {/* Submit Form Section */}
        <div className="col-md-6 mb-4">
          <form onSubmit={handleSubmit}>
            {/* Rating*/}
            <div className="mb-3">
              <Rating onClick={handleRating} ratingValue={newReview.rating} size={25} />
            </div>
            {/* Name */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                required
              />
            </div>
            {/* Comment */}
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Your Review"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                required
                rows="4"
              />
            </div>
            {/* Submit */}
            <button type="submit" className="btn btn-primary">Submit Review</button>
            {/* Link to ListReviewsPage */}
            <div>
              <br />
              <Link to="/list_reviews"><button className="btn btn-secondary">
                See All Reviews
              </button></Link>
            </div>
          </form>
        </div>

        {/* Display Reviews */}
        <div className="col-md-6">
          <h4>What Our Customers Are Saying</h4>
          {/* Map through amd and displays reviews */}
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-3 mb-3">
              <p className="mb-1"><strong>{review.name}</strong></p>
              <Rating initialValue={review.rating} readonly size={20} />
              <p className="mb-1">{review.comment}</p>
              {review.ownerResponse && (
                <div>
                  <p className="mb-0">Response from owner:</p>
                  <p>{review.ownerResponse}</p>
                  <p>{review.ownerResponseDate}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
