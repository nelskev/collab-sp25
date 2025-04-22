import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextNameContext } from '../context/TextNameContext';

function LoginLogoutButton() {
  const navigate = useNavigate();
  const { textName, setTextName } = useContext(TextNameContext);

  useEffect(() => {
    // Check if user data exists in session storage
    const userData = sessionStorage.getItem('_id');
    if (userData) {
        setTextName('Sign out');
    } else {
        setTextName('Sign in');
    }
  });

  const handleClick = () => {
    if (textName === 'Sign out') {
      // Clear session storage and navigate to home
      sessionStorage.removeItem('_id');
      setTextName('Sign in'); 
      navigate('/');
    } else {
      // Navigate to the sign-in page
      navigate('/signin');
    }
  };

  return (
    <button className="btn btn-outline-primary w-100" onClick={handleClick}>
      {textName}
    </button>
  );
}

export default LoginLogoutButton;