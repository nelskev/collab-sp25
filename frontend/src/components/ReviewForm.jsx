import React from 'react';
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';

export default function ReviewForm({
  name,
  setName,
  rating,
  setRating,
  comment,
  setComment,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit}>
      {/* Rating */}
      <div className="mb-3">
        <Rating onClick={setRating} ratingValue={rating} size={25} />
      </div>

      {/* Name */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Comment */}
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Your Review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          rows="4"
        />
      </div>

      {/* Submit */}
      <button type="submit" className="btn btn-primary">Submit Review</button>

      {/* To List Reviews page */}
      <div className="mt-3">
        <Link to="/list_reviews">
          <button type="button" className="btn btn-secondary">
            See All Reviews
          </button>
        </Link>
      </div>
    </form>
  );
}
