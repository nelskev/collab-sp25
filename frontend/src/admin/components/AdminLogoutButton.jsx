import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  const [isButtonVisible, setButtonVisible] = useState(true);

  
  function handleLogout() {
    // Clear the session storage
    sessionStorage.removeItem('_id');
    // Removes button visibility removing need for refresh
    setButtonVisible(false);
    // Navigate to home page
    // navigate('/');
    if (sessionStorage.getItem('_id') === null) {
      alert(`Logged out successfully!`);
    }
  };

  return (
    <>
    {isButtonVisible && (    
      <button
      className="m-0 btn btn-outline-light"
      onClick={handleLogout}
      >
      Logout Admin {sessionStorage.getItem('_username')}
    </button>
    )}
    </>
  );
}

export default LogoutButton;
