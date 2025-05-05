import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import formatDate from '../../helpers/dateConversion';
import ReviewForm from '../components/ReviewForm';
import ConfirmationModal from '../components/ConfirmationModal';
import reviewValidationSchema from "../admin/validation/reviewValidation";

// Separated out states instead of all being collected in newReviews
const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [showModal, setShowModal] = useState(false);

  //JOI
  const [nameError, setNameError] = useState(null)
  const [ratingError, setRatingError] = useState(null)
  const [commentError, setCommentError] = useState(null)
  const [allErrors, setAllErrors] = useState([])

  const fetchData = async () => {
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

  useEffect(() => {
    document.title = 'Reviews';
    fetchData();
  }, []);

  const handleReviewCreated = () => {
    fetchData()
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit triggered!");//debug
    // JOI Errors
    // Clear Joi
    setNameError('')
    setRatingError('')
    setCommentError('')
    setAllErrors([])
    // Use Joi to validate the data
    const validationResult = reviewValidationSchema.validate({ name: name, rating: rating, comment: comment, reviewDate: new Date().toISOString() },
      { abortEarly: false })
      console.log("Validation result:", validationResult);//debug
    //Joi validation errors
    if (validationResult.error) {
      const errors = validationResult.error.details
      errors.forEach(error=>{
        switch(error.context.key){
            case 'name':
                setNameError(error.message)
                break;
              case 'rating':
                setRatingError(error.message)
                break;
            case 'comment':
                setCommentError(error.message)
                break;
            default:
                break;
        }
    })
    const messages = errors.map(error => error.message)
    setAllErrors(messages)
    //End Joi errors
    return
    }

    if (name && rating && comment) {
      const newReview = {
        name,
        rating,
        comment,
        reviewDate: new Date().toISOString(),
      };
      console.log("Attempting to send review data:", newReview);//debug

      try {
        const response = await fetch('http://localhost:8000/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newReview),
        });
        console.log("Response Status:", response.status);//debug
        const data = await response.json();
        console.log("Server Response Data:", data);//debug
        if (response.ok) {
          console.log("Review submitted successfully!");//debug
          handleReviewCreated()
          setReviews([data, ...reviews]);
          setName('');
          setRating(0);
          setComment('');
          setShowModal(true);
          console.log("Review submitted successfully!");//debug
        }
      } catch (error) {
        console.error('Could not submit review:', error);
      }
    }
  };

  return (
    <div className="container section-3">
      <h1 className="mb-4">Leave a Review</h1>

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

            allErrors={allErrors}             // JOI all errors
            nameError={nameError}
            ratingError={ratingError}
            commentError={commentError}       // JOI
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
