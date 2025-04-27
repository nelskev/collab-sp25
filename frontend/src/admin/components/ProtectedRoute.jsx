import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/* const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (sessionStorage.getItem('_id') === null) {
    if (location.pathname === '/admin') {
      return <Navigate to={`/adminlogin`} replace />;
    }
    else {
    return <Navigate to={`/adminlogin?redirect=${location.pathname}`} replace />;
    }
  }

  return children;
}; */

/*
const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (sessionStorage.getItem('_id') === null || sessionStorage.getItem('token') === null) {
    if (location.pathname === '/admin') {
      return <Navigate to={`/adminlogin`} replace />;
    }
    else {
      return <Navigate to={`/adminlogin?redirect=${location.pathname}`} replace />;
    }
  }

  return children;
}; */



const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const token = sessionStorage.getItem('token');
  const userId = sessionStorage.getItem('_id');
  const username = sessionStorage.getItem('_username');

  // Check if any of the required session items are missing
  const isSessionValid = token && userId && username;

  // Check if we're on an admin page
  const isAdminPage = location.pathname.startsWith('/admin');

  try {
    if (!isSessionValid) {
      // Clear all session storage items to ensure clean state
      sessionStorage.clear();

      // If we're on an admin page, redirect to login with return URL
      if (isAdminPage) {
        return <Navigate 
          to={`/login?redirect=${location.pathname}`} 
          replace 
        />;
      }

      // If not on admin page, redirect to home
      return <Navigate to="/" replace />;
    }
  } catch (error) {
    if (error instanceof DOMException) {
      // Handle the DOMException error
      console.error('DOMException error:', error);
      sessionStorage.clear();
      
      // Force a page reload to clear any lingering state
      window.location.href = isAdminPage ? '/adminlogin' : '/';
      return null;
    }
    // Rethrow other errors
    throw error;
  }

  // If everything is valid, render the protected content
  return children;
};

export default ProtectedRoute;