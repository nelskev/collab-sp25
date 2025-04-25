import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
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
};

export default ProtectedRoute;