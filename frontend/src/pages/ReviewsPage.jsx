import React from 'react'
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

//npm i react-simple-star-rating to install 

//initialize array of reviews objects with some sample content
export default function ReviewsPage() {
  const [reviews, setReviews] = useState([
    { name: 'Tammy', rating: 5, comment: 'Perfect'},
    { name: 'Jose', rating: 4, comment: 'Very good' }
  ]);
  const [newReview, setNewReview] = useState({ name: '', rating: 0, comment: '' });

  // Catch Rating value
  const handleRating = (rate) => {
    setNewReview({...newReview, rating: rate});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: '', rating: 0, comment: ''});
    }
  };

  return (
    <div>
      <h1>Reviews Page</h1>

      <div>
        {reviews.map((review, index) => (
          <div key={index}>
            <p><strong>{review.name}</strong></p>
            <Rating initialValue={review.rating} readonly />
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Your Name'
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
        />
        <Rating onClick={handleRating} />
        <textarea
          placeholder='Your Review'
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
        />
        <button type='submit'>
          Submit Review
        </button>
      </form>
    </div>
  );
}