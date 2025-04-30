import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';



function LogoutButton({ className, onClick }) {
// function LogoutButton({ className }) {

  const [isButtonVisible, setButtonVisible] = useState(true);

  

  function handleLogout() {
     if (window.confirm(`Are you sure you want to log out?`)) {
    // Clear the session storage
    sessionStorage.clear();
    // Removes button visibility removing need for refresh
    setButtonVisible(false);
    // Navigate to home page
    // navigate('/');
    if (sessionStorage.getItem('_id') === null) {
      alert(`Logged out successfully!`);
      onClick()
    }
  }
  };


  return (
    <>
    {isButtonVisible && (    
      <div className={className} onClick={handleLogout}>
      Logout Admin
    </div>
    )}
    </>
  );
}

export default LogoutButton;
