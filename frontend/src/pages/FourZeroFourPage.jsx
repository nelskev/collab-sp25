import React from "react";
import { Link } from "react-router-dom";

export default function FourZeroFourPage() {
  return (
    <>
        <div className="not-found-container">
            <h1 className='h1-404'>404</h1>
            <p>Oops! Page not found.</p>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <p>Return to <Link to="/">home</Link>.</p>
        </div>
        <style>
            {`
              .not-found-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .h1-404 {
    font-size: 5rem;
    color: #dc3545; /* Red color */
  }
  
  p {
    margin: 10px 0;
  }
  
  a {
    color: #007bff; /* Blue color */
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: #0056b3; /* Dark blue color on hover */
  }  
             `}
        </style>
    </>
    
  );
}