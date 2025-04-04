import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
// import EmployeeCard from './../components/EmployeeCard';
// import EmployeeForm from './../components/EmployeeForm';

// This page WILL NEED TO change browser tab title to 'ADMIN : Scotts Collision Repair'
import ReviewCard from '../components/ReviewCard';



const CardList = () => {

const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/reviews') // Assuming your backend route is /reviews
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
        setError(error);
        setLoading(false);
      });
  },);

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   // Fetch item data from API or database
  //   const fetchItems = async () => {
  //     const response = await fetch('https://localhost:8000/reviews');
  //     const data = await response.json();
  //     setItems(data);
  //   };
  //   fetchItems();
  // }, []);
};

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/reviews') // Assuming your backend route is /reviews
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setReviews(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className='d-flex justify-content-between align-items-center bg-black p-4'>
      <div className='text-white fs-4 fw-bold'>Admin Reviews</div>
      <div className="card-list">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

