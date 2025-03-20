import React, { useState, useEffect } from 'react';

export default function EmployeeCard() {
  const [employees, setEmployees] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/employees') // Assuming your backend route is /employees
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setEmployees(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
        setError(error);
        setLoading(false);
      });
  },);

  if (loading) {
    return <p>Loading employees...</p>;
  }

  if (error) {
    return <p>Error loading employees: {error.message}</p>;
  }

  return (
    <div className="col-12 col-md-11 col-lg-10 col-xl-9 mx-auto">
       <div className="d-flex align-items-center gap-4 border border-1 py-3 px-4 justify-content-between bg-secondary text-white">
          <p className='m-0 col-2'>Name</p>
          <p className='m-0 text-start col-2'>Age</p>
          <p className='m-0 text-start col-2'>Role</p>
          <p className='m-0 text-start col-2'>Salary</p>
          <p className="m-0 text-start">Details</p>
        </div>
      {employees.map(employee => (
        <div key={employee._id} className="d-flex align-items-center gap-4 border border-1 ps-4 p-2 justify-content-between">
          <p className='m-0 col-2'>{employee.name}</p>
          <p className='m-0 text-start col-2'>{employee.age}</p>
          <p className='m-0 text-start col-2'>{employee.role}</p>
          <p className='m-0 text-start col-2'>${employee.salary}</p>
          <button className="m-0 btn btn-primary py-1">Details</button>
        </div>
      ))}
    </div>
  );
}

