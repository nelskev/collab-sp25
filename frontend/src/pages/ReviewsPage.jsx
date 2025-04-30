import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import formatDate from '../../helpers/dateConversion';
import ReviewForm from '../components/ReviewForm';
import ConfirmationModal from '../components/ConfirmationModal';

// Separated out states instead of all being collected in newReviews
function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = 'Reviews';
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:8000/reviews');
        const data = await response.json();

        const sortedReviews = data
          .sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate)) // Sort by newest first
          .sort((a, b) => b.rating - a.rating) // Prioritize higher ratings
          .slice(0, 5); // Limit to top 5

        setReviews(sortedReviews);
      } catch (err) {
        console.error('Could not load reviews:', err);
      }
    };

    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && rating && comment) {
      const newReview = {
        name,
        rating,
        comment,
        reviewDate: new Date().toISOString(),
      };

      try {
        const response = await fetch('http://localhost:8000/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newReview),
        });

        const data = await response.json();
        if (data) {
          setReviews([data, ...reviews]);
          setName('');
          setRating(0);
          setComment('');
          setShowModal(true);
        }
      } catch (error) {
        console.error('Could not submit review:', error);
      }
    }
  };

  return (
    <div className="container section-3">
      <h1 className="custom-blue mb-4">Leave a Review</h1>

      <div className="row">
        {/* Created A Review Form Component */}
        <div className="col-md-6 mb-4">
          <ReviewForm
            name={name}
            setName={setName}
            rating={rating}
            setRating={setRating}
            comment={comment}
            setComment={setComment}
            handleSubmit={handleSubmit}
          />
        </div>

        {/* Display Reviews */}
        <div className="col-md-6">
          <h4>What Our Customers Are Saying</h4>
          <div className="border p-3 overflow-auto" style={{ maxHeight: '500px' }}>
            {reviews.map((review, index) => (
              <div key={index} className="p-3 mb-3 border rounded">
                <p className="mb-1"><strong>{review.name}</strong></p>
                <Rating initialValue={review.rating} readonly size={20} />
                <p className="mb-1">{review.comment}</p>
                <small className="text-muted">{formatDate(review.reviewDate)}</small>
                {review.ownerResponse && (
                  <div className="mt-2 p-2 bg-light rounded">
                    <p className="mb-0"><strong>Response from owner:</strong></p>
                    <p className="mb-0">{review.ownerResponse}</p>
                    <small className="text-muted">{formatDate(review.ownerResponseDate)}</small>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        message="Your review has been sent successfully!"
      />
    </div>
  );
}

export default ReviewsPage;
