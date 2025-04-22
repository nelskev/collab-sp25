import { useNavigate } from 'react-router-dom';

// import { useNavigate } from "react-router-dom";
function HandleLogout() {
    const navigate = useNavigate();
    // Clear the session storage
    sessionStorage.removeItem('_id');
    // Navigate to home page
    // navigate('/');
  };

export default HandleLogout;