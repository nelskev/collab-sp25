import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';

// export default function ReviewCard() {
//   const [reviews, setReviews] = useState();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:8000/reviews') // Assuming your backend route is /reviews
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         setReviews(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching reviews:', error);
//         setError(error);
//         setLoading(false);
//       });
//   },);

//   if (loading) {
//     return <p>Loading reviews...</p>;
//   }

//   if (error) {
//     return <p>Error loading reviews: {error.message}</p>;
//   }

//   return (
//     <div className="col-12 col-md-11 col-lg-10 col-xl-9 mx-auto">
//        <div className="d-flex align-items-center gap-4 border border-1 py-3 px-4 justify-content-between bg-secondary text-white">
//           <p className='m-0 col-2'>Rating</p>
//           <p className='m-0 text-start col-2'>Date</p>
//           <p className='m-0 text-start col-2'>Role</p>
//           <p className='m-0 text-start col-2'>Salary</p>
//           <p className="m-0 text-start">Details</p>
//         </div>
//       {reviews.map(review => (
//         <div key={review._id} className="d-flex align-items-center gap-4 border border-1 ps-4 p-2 justify-content-between">
//           <p className='m-0 col-2'>{review.rating}</p>
//           <p className='m-0 text-start col-2'>{review.date}</p>
//           <p className='m-0 text-start col-2'>{review.name}</p>
//           <p className='m-0 text-start col-2'>{review.description}</p>
//           <button className="m-0 btn btn-primary py-1">Details</button>
//         </div>
//       ))}
//     </div>
//   );
// }



// const ReviewCard = ({ review }) => {
//   try {
//     return (
//       <div className="review-card"
//       >
//         <h2>{review.title}</h2>
//         <p>{review.description}</p>
//         <p>Rating: {review.rating}</p>
//       </div>
//     );
//   } catch (error) {
//     return <p>Unable to load review: {error.message}</p>;
//   }
// };

// export default ReviewCard;


// ReviewCard.jsx


const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};


// function formatDate(dateValue) {
//   if (!(dateValue instanceof Date)) {
//     throw new Error('Input must be a valid Date object');
//   }

//   const options = { year: 'numeric', month: 'long', day: 'numeric' };
//   const formatter = new Intl.DateTimeFormat('en-US', options);
//   const parts = formatter.formatToParts(dateValue);

//   const month = parts.find(part => part.type === 'month').value;
//   const day = parts.find(part => part.type === 'day').value;
//   const year = parts.find(part => part.type === 'year').value;

//   return `${month} ${day}, ${year}`;
// }


const ReviewCard = ({ review }) => {
  try {
    return (
      <div className="review-card">
        <h2>{review.name}</h2>
        <Rating style={{ transformOrigin: 'left', transform: 'scale(0.5,0.5)', textAlign: 'left', marginTop: '-10px' }} initialValue={review.rating} readonly />
        <p>{formatDate(review.reviewDate)}</p>       
        <p>{review.comment}</p>
        {/* <p>Rating: {review.rating}</p> */}
        {review.response && (
          
          <div className='border-top mt-2'>
        
            <h3>Owner Response:</h3>
            <p>{review.response}</p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    return <p>Unable to load review: {error.message}</p>;
  }
};

export default ReviewCard;
