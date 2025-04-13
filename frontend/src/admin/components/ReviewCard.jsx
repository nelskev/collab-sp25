import React from 'react';
import { Rating } from 'react-simple-star-rating';




const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};






const ReviewCard = ({ 
  name, 
  rating, 
  comment, 
  reviewDate, 
  ownerResponse, 
  ownerResponseDate 
}) => {
  try {
    return (
      <div className="review-card">
        <h2>{name}</h2>
        <Rating 
          style={{ 
            transformOrigin: 'left', 
            transform: 'scale(0.5,0.5)', 
            textAlign: 'left', 
            marginTop: '-10px' 
          }} 
          initialValue={rating} 
          readonly 
        />
        <p>{formatDate(reviewDate)}</p>       
        <p>{comment}</p>
        {ownerResponse && (
          <div className='border-top mt-2'>
            <h4>Owner Response:</h4>
            {ownerResponseDate &&( <p>on {formatDate(ownerResponseDate)}</p>)}
            <p>{ownerResponse}</p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    return <p>Unable to load review: {error.message}</p>;
  }
};




export default ReviewCard;
