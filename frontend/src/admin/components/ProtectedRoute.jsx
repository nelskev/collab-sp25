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

  if (!token || !userId) {
    // Redirect to login with the attempted URL
    if (location.pathname === '/admin') {
      return <Navigate to={`/adminlogin`} replace />;
    }
    else {return <Navigate 
      to={`/adminlogin?redirect=${location.pathname}`} 
      replace 
    />;}
  }

  return children;
};


export default ProtectedRoute;