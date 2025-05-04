export const authenticatedFetch = async (url, options = {}) => {
    const token = sessionStorage.getItem('token');
    
    const headers = {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  
    const response = await fetch(url, {
      ...options,
      headers,
    });
  
    if (response.status === 401) {
      // Token expired or invalid
      sessionStorage.clear();
      window.location.href = '/adminlogin';
      throw new Error('Session expired. Please login again.');
    }
  
    return response;
  };