import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';



const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [isValid, setIsValid] = useState(null);
  const token = sessionStorage.getItem('token');
  const userId = sessionStorage.getItem('_id');
  const username = sessionStorage.getItem('_username');

  // Check if any of the required session items are missing
  const isSessionValid = token && userId && username;

  // Check if we're on an admin page
  const isAdminPage = location.pathname.startsWith('/admin');

  useEffect(() => {
    const verifyToken = async () => {
      if (!isSessionValid) {
        setIsValid(false);
        return;
      }

      try {
        const response = await fetch('/admin/signin/verify-token', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Token verification failed');
        }

        const data = await response.text();
        setIsValid(data === 'Token is valid');
      } catch (error) {
        console.error('Token verification error:', error);
        setIsValid(false);
      }
    };

    verifyToken();
  }, [token, isSessionValid]);

  // Show loading state while verifying
  if (isValid === null) {
    return <div>Loading...</div>;
  }

  // Handle invalid session or token
  if (!isValid) {
    sessionStorage.clear();
    
    if (isAdminPage) {
      return <Navigate 
        to={`/login?redirect=${location.pathname}`} 
        replace 
      />;
    }
    return <Navigate to="/" replace />;
  }

  // If everything is valid, render the protected content
  return children;
};

export default ProtectedRoute;