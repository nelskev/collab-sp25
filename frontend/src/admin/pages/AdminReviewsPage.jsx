import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import formatDate from '../../../helpers/dateAndTimeConversion';
// import EmployeeCard from './../components/EmployeeCard';
// import EmployeeForm from './../components/EmployeeForm';

// This page WILL NEED TO change browser tab name to 'ADMIN : Scotts Collision Repair'
import ReviewCard from '../components/ReviewCard';
import AdminNavbar from '../components/AdminNavbar';

import formatDate from '../components/ReviewCard';



{/*
  Goals for current page:


  Necessary for sprint:

  Connect to MongoDB


  -----------------------------------------------------

  

  Optional if time allows

  Improve datepicker formatting by potentially removing visibility if date selector is not selected.
  
  Potential response delete
  
  */}


// const CardList = () => {

// const [reviews, setReviews] = useState();
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

//   // const [items, setItems] = useState([]);

//   // useEffect(() => {
//   //   // Fetch item data from API or database
//   //   const fetchItems = async () => {
//   //     const response = await fetch('https://localhost:8000/reviews');
//   //     const data = await response.json();
//   //     setItems(data);
//   //   };
//   //   fetchItems();
//   // }, []);
// };






function AdminReviewsPage() {

  useEffect(() => {
    document.title = (`ADMIN : Scotts Collision Repair`);
  }, []);



  const [sortCriteria, setSortCriteria] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [response, setResponse] = useState('');
  // const [showResponseForm, setShowResponseForm] = useState(false);



  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  


  
  function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
  }
  
  // const [reviews, setReviews] = useState([
  //   { id: 1, name: 'Excellent Service', description: 'The customer service was outstanding and very helpful.', rating: 5, response: '', date: getRandomDate(new Date(2023, 0, 1), new Date()) },
  //   { id: 2, name: 'Great Product', description: 'I love this product! It exceeded my expectations.', rating: 4, response: '', date: getRandomDate(new Date(2023, 0, 1), new Date()) },
  //   { id: 3, name: 'Average Experience', description: 'The product is okay, but nothing special.', rating: 3, response: '', date: getRandomDate(new Date(2023, 0, 1), new Date()) },
  //   { id: 4, name: 'Needs Improvement', description: 'The delivery was late and the product was not as described.', rating: 2, response: '', date: getRandomDate(new Date(2023, 0, 1), new Date()) },
  //   { id: 5, name: 'Disappointing', description: 'I am very unhappy with the quality of the product.', rating: 1, response: '', date: getRandomDate(new Date(2023, 0, 1), new Date()) },
  //   { id: 6, name: 'Highly Recommended', description: 'This is one of the best purchases I have made. Highly recommend it.', rating: 5, response: '', date: getRandomDate(new Date(2023, 0, 1), new Date()) },
  //   { id: 7, name: 'Good Value', description: 'The price is reasonable and the product is good.', rating: 4, response: '', date: getRandomDate(new Date(2023, 0, 1), new Date()) },
  //   { id: 8, name: 'Could Be Better', description: 'The product is decent, but there are some issues.', rating: 3, response: '', date: getRandomDate(new Date(2023, 0, 1), new Date()) },
  //   { id: 9, name: 'Not Worth It', description: 'I regret buying this product. It was a waste of money.', rating: 2, response: '', date: getRandomDate(new Date(2023, 0, 1), new Date()) },
  //   { id: 10, name: 'Terrible Experience', description: 'The service was terrible and the product was defective.', rating: 1, response: 'Sorry about that', date: getRandomDate(new Date(2023, 0, 1), new Date()) },
  // ]);

 // const [reviews, setReviews] = useState([
  //   { id: 1, name: 'Excellent Service', description: 'The customer service was outstanding and very helpful.', rating: 5, response: '' },
  //   { id: 2, name: 'Great Product', description: 'I love this product! It exceeded my expectations.', rating: 4, response: '' },
  //   { id: 3, name: 'Average Experience', description: 'The product is okay, but nothing special.', rating: 3, response: '' },
  //   { id: 4, name: 'Needs Improvement', description: 'The delivery was late and the product was not as described.', rating: 2, response: '' },
  //   { id: 5, name: 'Disappointing', description: 'I am very unhappy with the quality of the product.', rating: 1, response: '' },
  //   { id: 6, name: 'Highly Recommended', description: 'This is one of the best purchases I have made. Highly recommend it.', rating: 5, response: '' },
  //   { id: 7, name: 'Good Value', description: 'The price is reasonable and the product is good.', rating: 4, response: '' },
  //   { id: 8, name: 'Could Be Better', description: 'The product is decent, but there are some issues.', rating: 3, response: '' },
  //   { id: 9, name: 'Not Worth It', description: 'I regret buying this product. It was a waste of money.', rating: 2, response: '' },
  //   { id: 10, name: 'Terrible Experience', description: 'The service was terrible and the product was defective.', rating: 1, response: 'Sorry about that' },
  // ]);
  
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Excellent Service',
      comment: 'The customer service was outstanding and very helpful.',
      rating: 5,
      reviewDate: new Date('2023-10-05T14:48:00.000Z'),
      response: '',
      responseDate: null,
    },
    {
      id: 2,
      name: 'Great Product',
      comment: 'I love this service! It exceeded my expectations.',
      rating: 4,
      reviewDate: new Date(2023, 0, 1),
      response: '',
      responseDate: null,
    },
    {
      id: 3,
      name: 'Good Experience',
      comment: 'Had issues and was charged more than expected, but am happy.',
      rating: 3,
      reviewDate: new Date(2023, 0, 1),
      response: '',
      responseDate: null,
    },
    {
      id: 4,
      name: 'Needs Improvement',
      comment: 'The scheduling was late and my car was finished way later than expected.',
      rating: 2,
      reviewDate: new Date(2025, 3, 8),
      response: '',
      responseDate: null,
    },
    {
      id: 5,
      name: 'Disappointing',
      comment: 'They had issues communicating with me and I got charged for a service I didn\'t want.',
      rating: 1,
      reviewDate: new Date(2023, 0, 1),
      response: '',
      responseDate: null,
    },
    {
      id: 6,
      name: 'Highly Recommended',
      comment: 'This is one of the best services I have got done on my car. Highly recommend it.',
      rating: 5,
      reviewDate: new Date(2023, 0, 1),
      response: '',
      responseDate: null,
    },
    {
      id: 7,
      name: 'Good Value',
      comment: 'The price is reasonable and the service is good.',
      rating: 4,
      reviewDate: new Date(2023, 0, 1),
      response: '',
      responseDate: null,
    },
    {
      id: 8,
      name: 'Could Be Better',
      comment: 'The service is decent, but pricing seems really high.',
      rating: 3,
      reviewDate: new Date(2023, 2, 1),
      response: '',
      responseDate: null,
    },
    {
      id: 9,
      name: 'Not Worth It',
      comment: 'I regret buying this service. It was a waste of money.',
      rating: 2,
      reviewDate: new Date(2023, 0, 1),
      response: '',
      responseDate: null,
    },
    {
      id: 10,
      name: 'Terrible Experience',
      comment: 'The service was bad and the price was extremely expensive.',
      rating: 1,
      reviewDate: new Date(2023, 0, 1),
      response: 'We apologize for the rough service. We would like to make it right.',
      responseDate: getRandomDate(new Date(2023, 0, 1), new Date()),
    },
  ]);
  


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/reviews')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      // setAppointments(data)
      console.log('Server response:', data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])      // useEffect only handles the initial data load (runs once), which is our state array



  // const handleSortChange = (e) => {
  //   setSortCriteria(e.target.value);
  // };


  // const handleSortChange = (e) => {
  //   const newSortCriteria = e.target.value;
  //   setSortCriteria(newSortCriteria);
  //   if (newSortCriteria !== 'date' && sortOrder === 'custom') {
  //     setSortOrder('asc'); // Reset sort order to 'asc' when criteria changes
  //   }
  // };

  // const handleSortChange = (e) => {
  //   const newSortCriteria = e.target.value;
  //   setSortCriteria(newSortCriteria);
  //   if (newSortCriteria === 'date' && sortOrder === 'custom') {
  //     setSortOrder('asc'); // Reset sort order to 'asc' when criteria changes
  //   }
  // };


  const handleSortChange = (e) => {
    const newSortCriteria = e.target.value;
    setSortCriteria(newSortCriteria);
    if (newSortCriteria !== 'date' || sortOrder !== 'custom') {
      setStartDate(null); // Reset the date filter
      setEndDate(null); // Reset the date filter
    }
    if (newSortCriteria !== 'date' && sortOrder === 'custom') {
      setSortOrder('desc'); // Reset sort order to 'asc' when criteria changes
    }
  };

  const handleSortOrderChange = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);
    if (newSortOrder !== 'custom') {
      setStartDate(null); // Reset the date filter
      setEndDate(null); // Reset the date filter
    }
  };
  


  // const filteredReviews = startDate
  // ? reviews.filter(review => {
  //     const reviewDate = new Date(review.reviewDate);
  //     return reviewDate.toDateString() === startDate.toDateString();
  //   })
  // : reviews;

  // const filteredReviews = startDate
  // ? reviews.filter(review => {
  //     const reviewDate = new Date(review.reviewDate);
  //     return reviewDate.toDateString() === startDate.toDateString();
  //   })
  // : reviews;

//   const filteredReviews = startDate
//   ? reviews.filter(review => {
//       const reviewDate = new Date(review.reviewDate);
//       return reviewDate.toDateString() === startDate.toDateString();
//     })
//   : reviews;
// console.log('Filtered reviews:', filteredReviews);


const filteredReviews = startDate && endDate
  ? reviews.filter(review => {
      const reviewDate = new Date(review.reviewDate);
      return reviewDate >= startDate && reviewDate <= endDate;
    })
  : reviews;

useEffect(() => {
  console.log('Component re-rendered');
}, [startDate, reviews]);
 

//   const sortedReviews = reviews.sort((a, b) => {
//     if (sortOrder === 'asc') {
//       if (sortCriteria === 'name') {
//         return a.name.localeCompare(b.name);
//       } else if (sortCriteria === 'rating') {
//         return a.rating - b.rating;
//       } else if (sortCriteria === 'date') {
//         return new Date(a.reviewDate) - new Date(b.reviewDate);
//       }
//     } else if (sortOrder === 'desc') {
//       if (sortCriteria === 'name') {
//         return b.name.localeCompare(a.name);
//       } else if (sortCriteria === 'rating') {
//         return b.rating - a.rating;
//       } else if (sortCriteria === 'date') {
//         return new Date(b.reviewDate) - new Date(a.reviewDate);
//       }
//     }


// });

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
  

  // const sortedReviews = reviews.sort((a, b) => {
  //   if (sortOrder === 'asc') {
  //     if (sortCriteria === 'name') {
  //        if (sortCriteria === 'date') {
  //       return new Date(a.reviewDate) - new Date(b.reviewDate);
  //       return a.name.localeCompare(b.name); }
  //        else if (sortCriteria === 'rating') {
  //       return a.rating - b.rating; } 
  //     }
  //   } else {
  //     if (sortCriteria === 'name') {
  //       return b.name.localeCompare(a.name);
  //     } else if (sortCriteria === 'rating') {
  //       return b.rating - a.rating;
  //     } else if (sortCriteria === 'date') {
  //       return new Date(b.reviewDate) - new Date(a.reviewDate);
  //     }
  //   }
  // });
  
 


  const [selectedReview, setSelectedReview] = useState(null);
  const handleReviewClick = (review) => {
    if (selectedReview && selectedReview.id === review.id) {
      setSelectedReview(null);
    } else {
      setSelectedReview(review);
    }
  };

  // const handleButtonClick = () => {
  //   if (selectedReview) {
  //     alert(`You selected review ${selectedReview.name}`);
  //     // Add your button activation logic here
  //   } else {
  //     alert('Please select a review');
  //   }
  // };


  const handleDeleteReview = (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReviews(reviews.filter((review) => review.id !== reviewId));
      setSelectedReview(null);
    }
  };

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleResponseSubmit = (reviewId) => {
    if (window.confirm(`Confirm response message: ${response} `)) {
    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        return { ...review, response: response, responseDate: new Date()
        };
      }
      return review;
    });
    setReviews(updatedReviews);
    setResponse('');
    setSelectedReview(null);
  }
  };
  

  // const handleResponseSubmit = (reviewId) => {
  //   const updatedReviews = {
  //     ...reviews,
  //     [reviewId]: {
  //       ...reviews[reviewId],
  //       response,
  //       responseDate: new Date(),
  //     },
  //   };
  //   setReviews(updatedReviews);
  //   setResponse('');
  // };
 
  


  // const [reviews, setReviews] = useState();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:8000/reviews') // Assuming your backend route is /reviews
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setReviews(data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching reviews:', error);
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

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
              {/* <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Select a date"
                disabled={ sortCriteria === `date` && sortOrder === `custom` ? false : true}
              /> */}

<div style={{
   display: 'flex',
  //  alignItems: 'center'
}}>


<DatePicker
  selected={startDate}
  onChange={(date) => {
    setStartDate(date);
    if (endDate == null) {setEndDate(date)};
    // console.log('Selected date:', date);
  }}
  placeholderText="Select a date"
  disabled={sortCriteria !== 'date' || sortOrder !== 'custom'}
  // style={{ display: (sortCriteria === 'date' || sortOrder === 'custom') ? 'inline-block' : 'none' }}
/>
<DatePicker
  selected={endDate}
  onChange={(date) => {
    setEndDate(date);
    // console.log('Selected end date:', date);
  }}
  placeholderText="Select end date"
  disabled={sortCriteria !== 'date' || sortOrder !== 'custom'}
  // style={{ display: (sortCriteria === 'date' || sortOrder === 'custom') ? 'inline-block' : 'none' }

/>
</div>
              
          {/* <div className="border p-3 overflow-auto" style={{ height: '500px' }}>
            {reviews.map((review) => (
              <div
                key={review.id}
                onClick={() => handleReviewClick(review)}
                style={{
                  backgroundColor: selectedReview && selectedReview.id === review.id ? 'lightblue' : '',
                  cursor: 'pointer',
                  padding: '10px',
                  border: '1px solid #ddd',
                  marginBottom: '10px',
                }}
              >
    <ReviewCard review={review} response={review.response} />              </div>
            ))} */}

<div className="border p-3 overflow-auto" 
style={{ height: '500px' }} 

>
  {sortedReviews.map((review) => (
    <div
      key={review.id}
      onClick={() => handleReviewClick(review)}
      style={{
        backgroundColor: selectedReview && selectedReview.id === review.id ? 'lightblue' : '',
        cursor: 'pointer',
        padding: '10px',
        border: '1px solid #ddd',
        marginBottom: '10px',
      }}
    >
      <ReviewCard review={review} response={review.response} />
    </div>
  ))}

            {/* <button className="btn btn-primary mt-2" onClick={handleButtonClick}>
              Activate
            </button> */}

            
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
  onClick={() => handleResponseSubmit(selectedReview.id)}
>
  Respond
</button>







<button
  type="button"
  className="btn btn-secondary mx-2"
  // disabled={!selectedReview}
  style= {{display: selectedReview ? '': 'none' }}

  onClick={() => handleDeleteReview(selectedReview.id)}
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
  disabled={!selectedReview}
/>




</div>
        </>
  );
};




export default AdminReviewsPage;