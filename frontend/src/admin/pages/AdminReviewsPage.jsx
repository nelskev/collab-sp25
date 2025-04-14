import {React, useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";




import ReviewCard from '../components/ReviewCard';
import AdminNavbar from '../components/AdminNavbar';




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
  






  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/reviews')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setReviews(data)
      console.log('Server response:', data)
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
  




  const handleSortChange = (e) => {
    const newSortCriteria = e.target.value;
    setSortCriteria(newSortCriteria);
    if (newSortCriteria !== 'date' || sortOrder !== 'custom') {
      setStartDate(null); // Reset the date filter
      setEndDate(null); // Reset the date filter
    }
    if (newSortCriteria !== 'date' && sortOrder === 'custom') {
      setSortOrder('desc'); // Reset sort order to 'descending' when criteria changes
    }
    fetchData(); // Fetch the reviews again
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
  







const filteredReviews = startDate && endDate
  ? reviews.filter(review => {
      const reviewDate = new Date(review.reviewDate);
      const startDateMidnight = new Date(startDate);
      startDateMidnight.setHours(0, 0, 0, 0);
      const endDateMidnight = new Date(endDate);
      endDateMidnight.setHours(23, 59, 59, 0);
      return reviewDate >= startDateMidnight && reviewDate <= endDateMidnight;
    }) // startDateMidnight and endDateMidnight are used so if the user selects one day the filter will select it regardless of time.
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
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      } else {
        console.error('Review ID is undefined');
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
              <h2 className="mb-0"><b>My Reviews</b></h2>
            </div>
            <select value={sortCriteria} onChange={handleSortChange}>
              <option value="date">Date</option>
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>
            <select value={sortOrder} onChange={handleSortOrderChange}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
              <option value="custom" disabled={ sortCriteria === `date` ? `` : true}>Select Date</option>
            </select>
 

<div style={{
   display: 'flex' 
   // Div prevents second datepicker from appearing on new line when first datepicker is being selected from.
}}>


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
  className="btn btn-secondary mx-2"
  // disabled={!selectedReview} 
  style= {{display: selectedReview ? '': 'none' }}
  onClick={() => handleResponseSubmit(selectedReview._id) }
>
  Respond
</button>







<button
  type="button"
  className="btn btn-secondary mx-2"
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