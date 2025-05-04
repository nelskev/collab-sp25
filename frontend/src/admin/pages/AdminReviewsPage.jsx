import {React, useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { authenticatedFetch } from '../authentication/authenticatedFetch'




import ReviewCard from '../components/ReviewCard';
import AdminNavbar from '../components/AdminNavbar';

import { responseValidationSchema } from '../validation/responseValidation.js';



/* 
  Admin Reviews Page:


  This page has:
  
  1. The reviews element and fetches the data from the review cluster to 
  gather all the necessary information to display the reviews. 
  2. Admin ability to respond to reviews and delete them.

  
  
  */






function AdminReviewsPage() {

  useEffect(() => {
    document.title = (`ADMIN : Scotts Collision Repair`);
  }, []); // Changes browser tab name to 'ADMIN : Scotts Collision Repair'


  const [reviews, setReviews] = useState([]);


  const [sortCriteria, setSortCriteria] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [response, setResponse] = useState('');



  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  

  const [responseBanner, setResponseBanner] = useState(false);
  const [deleteBanner, setDeleteBanner] = useState(false);





  const fetchData = async () => {
    try {
      // const response = await fetch('http://localhost:8000/reviews')
      const response = await authenticatedFetch('http://localhost:8000/reviews')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setReviews(data)
      // console.log('Server response:', data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  

  useEffect(() => {
    fetchData()
  }, [])      // useEffect only handles the initial data load (runs once), which is our state array

  useEffect(() => {
    fetchData();
  }, [startDate, endDate]);   // useEffect only handles the initial data load (runs once), which is our state array
  

  useEffect(() => {
    if (sortCriteria === 'date' && sortOrder === 'custom') {
      const currentDate = new Date().toISOString().slice(0, 10);
      setStartDate(currentDate);
      setEndDate(currentDate);
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  }, [sortCriteria, sortOrder]);


  const handleSortChange = (e) => {
    const newSortCriteria = e.target.value;
    setSortCriteria(newSortCriteria);
    if (newSortCriteria !== 'date' || sortOrder !== 'custom') {
      setStartDate(null); 
      setEndDate(null); 
    }
    if (newSortCriteria !== 'date' && sortOrder === 'custom') {
      setSortOrder('desc'); 
    }
    if (newSortCriteria === 'date' && sortOrder === 'custom') {
      const currentDate = new Date().toISOString().slice(0, 10);
      setStartDate(currentDate);
      setEndDate(currentDate);
    }
    fetchData(); 
  }
  
  const handleSortOrderChange = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);
    if (newSortOrder !== 'custom') {
      setStartDate(null); // Reset the date filter
      setEndDate(null); // Reset the date filter
    }
    fetchData(); // Fetch the reviews again
  }
  




function getStartDate(date) {
  const startDate = new Date(date + 'T00:00:00');
  // console.log('getStartDate:', startDate.toLocaleString());
  return startDate;
}

function getEndDate(date) {
  const endDate = new Date(date + 'T23:59:59.999');
  // console.log('getEndDate:', endDate.toLocaleString());
  return endDate;
}


const filteredReviews = startDate && endDate
  ? reviews.filter(review => {
      const reviewDate = new Date(review.reviewDate);
      const startDateMidnight = getStartDate(startDate);
      const endDateLastMillisecond = getEndDate(endDate);
      
      
      return reviewDate >= startDateMidnight && reviewDate <= endDateLastMillisecond;
    })
  : reviews;





 



const sortedReviews = [...filteredReviews].sort((a, b) => {
  if (sortOrder === 'asc') {
    if (sortCriteria === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortCriteria === 'rating') {
      return a.rating - b.rating;
    } else if (sortCriteria === 'date') {
      return new Date(a.reviewDate) - new Date(b.reviewDate);
    }
  } else if (sortOrder === 'desc') {
    if (sortCriteria === 'name') {
      return b.name.localeCompare(a.name);
    } else if (sortCriteria === 'rating') {
      return b.rating - a.rating;
    } else if (sortCriteria === 'date') {
      return new Date(b.reviewDate) - new Date(a.reviewDate);
    }
  }
});
  


 


  const [selectedReview, setSelectedReview] = useState(null);
  const handleReviewClick = (review) => {
    if (selectedReview && selectedReview.id === review.id) {
      setSelectedReview(null);
    } else {
      setSelectedReview(review);
    }
  };






  const handleDeleteReview = (review) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      if (review._id) {
        fetch(`http://localhost:8000/reviews/${review._id}`, {
          method: 'DELETE',
        })
        .then(() => {
          setReviews(reviews.filter((r) => r._id !== review._id));
          setSelectedReview(null);
          setDeleteBanner(true);
          setTimeout(() => {
            setDeleteBanner(false);
          }, 3000); // Hide the banner after 3 seconds
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      } else {
        console.error('Review ID is undefined');
      }
    }
  }
  

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };



  const handleResponseSubmit = (reviewId) => {
    const { error } = responseValidationSchema.validate({
      ownerResponse: response,
      ownerResponseDate: new Date(),
    });
  
    if (error) {
      console.error('Error:', error);
      alert(error.details[0].message);
    } else {
      if (window.confirm(`Confirm response message: ${response} `)) {
        if (reviewId) {
          fetch(`http://localhost:8000/reviews/${reviewId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ownerResponse: response,
              ownerResponseDate: new Date(),
            }),
          })
          .then(() => {
            const updatedReviews = reviews.map((review) => {
              if (review._id === reviewId) {
                return { ...review, ownerResponse: response, ownerResponseDate: new Date() };
              }
              return review;
            });
            setReviews(updatedReviews);
            setResponse('');
            setSelectedReview(null);
            setResponseBanner(true);
            setTimeout(() => {
              setResponseBanner(false);
            }, 3000); 
          })
          .catch((error) => {
            console.error('Error:', error)
          })
        } else {
          console.error('Review ID is undefined');
        }
      }
    }
  }
  
  
  



  return (
    <>


<AdminNavbar />



<div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
            <div className="sticky-top bg-white p-2 border-bottom">
            <h1 class="text-center fs-3 m-0 mt-1 section-header-blue">My Reviews</h1>
            </div>

          <div className="text-center mt-2 mb-2">
            <select className="btn  btn-primary dropdown-toggle me-1" value={sortCriteria} onChange={handleSortChange}>
              <option value="date">Date</option>
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>


            <select className="btn  btn-primary dropdown-toggle" value={sortOrder} onChange={handleSortOrderChange}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
              <option value="custom" disabled={ sortCriteria === `date` ? `` : true}>Select Date</option>
            </select>
          </div>      


 

<div style={{
   display: 'flex' 
   // Div prevents second datepicker from appearing on new line when first datepicker is being selected from.
}}>


{/* 
<DatePicker
  selected={startDate}
  onChange={(date) => {
    setStartDate(date);
    console.log('Start date:', date);
    if (endDate == null || date > endDate) {setEndDate(date)};
  }}
  placeholderText="Select a date"
  disabled={sortCriteria !== 'date' || sortOrder !== 'custom'}
/>

{startDate && (
<DatePicker
  selected={endDate}
  onChange={(date) => {
    if (startDate == null || date < startDate) {
      setStartDate(date);
    } setEndDate(date);
  }}
  placeholderText="Select end date"
  disabled={sortCriteria !== 'date' || sortOrder !== 'custom'}
/>
)}
*/}
{responseBanner && (
        <div className="alert alert-success col-11 col-md-9 col-lg-6 col-xl-5 mx-auto mt-3 text-center" role="alert">
          Response given
        </div>
      )}

{deleteBanner && (
        <div className="alert alert-danger col-11 col-md-9 col-lg-6 col-xl-5 mx-auto mt-3 text-center" role="alert">
          Review deleted
        </div>
      )}

{sortCriteria === 'date' && sortOrder === 'custom' && (

<div className='sort-appointments-wrapper d-flex gap-0 m-0 mb-5 mb-lg-0 mx-auto pb-0 mt-1'>



<input 
  className='m-0 sort-dates-input'
  type="date" 
  onChange={(e) => {
    const date = new Date(e.target.value);
    // console.log('Selected start date:', date.toISOString());
    setStartDate(e.target.value);
    if (endDate === null || date > new Date(endDate)) {
      // console.log('Setting end date to:', date.toISOString());
      setEndDate(getEndDate(e.target.value));
    }
  }}
  value={startDate || ''}
  placeholder="Select start date"
  disabled={sortCriteria !== 'date' || sortOrder !== 'custom'}
/>


  <input 
    className='m-0 sort-dates-input'
    type="date" 
    onChange={(e) => {
      const date = new Date(e.target.value);
      // console.log('Selected end date:', date.toISOString());
      if (startDate === null || date < new Date(startDate)) {
        // console.log('Setting start date to:', date.toISOString());
        setStartDate(e.target.value);
      }
      setEndDate(e.target.value);
    }} 
    value={endDate || ''}
    placeholder="Select end date"
    disabled={sortCriteria !== 'date' || sortOrder !== 'custom'}
  />




</div>
)}
</div>
              


<div className="border p-3 overflow-auto" 
style={{ height: '500px' }} 

>

  {sortedReviews.map((review) => (
  <div
    className="p-3 border mb-3"
    key={review._id}
    onClick={() => handleReviewClick(review)}
    style={{
      backgroundColor: selectedReview && selectedReview._id === review._id ? 'lightblue' : '',
      cursor: 'pointer',
    }}
  >
    <ReviewCard 
      name={review.name} 
      rating={review.rating} 
      comment={review.comment} 
      reviewDate={review.reviewDate} 
      ownerResponse={review.ownerResponse} 
      ownerResponseDate={review.ownerResponseDate} 
    />
  </div>
))}


        

            
          </div>
        </div>
      </div>
    </div>

 

<div className="align-items center">


  
    <button
  type="button"
  className="btn btn-primary mx-2"
  // disabled={!selectedReview} 
  style= {{display: selectedReview ? '': 'none' }}
  onClick={() => handleResponseSubmit(selectedReview._id) }
>
  Respond
</button>







<button
  type="button"
  className="btn btn-danger mx-2"
  // disabled={!selectedReview}
  style= {{display: selectedReview ? '': 'none' }}
  onClick={() => handleDeleteReview(selectedReview)}
>
  Delete
</button>



<textarea
  value={response}
  onChange={handleResponseChange}
  placeholder="Enter your response"
  rows="5"
  className={`form-control mt-2`}
  style= {{display: selectedReview ? '': 'none' }}
  // disabled={!selectedReview}
/>




</div>
 </>
  );
};




export default AdminReviewsPage;