import React, { useState, useEffect } from 'react';

export default function EmployeeForm() {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({ name: '', age: '', salary: '', role: '' });
  
    useEffect(() => {
      fetch('/employees')
        .then(response => response.json())
        .then(data => setEmployees(data))
        .catch(error => console.error('Error fetching employees:', error));
    }, []);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewEmployee({ ...newEmployee, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();  
      console.log('Submitting employee:', newEmployee);
  
      fetch('http://localhost:8000/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          // we need to reset the form on success, but it's not as easy as form.clear() ...  lol
          setEmployees([...employees, data]); // Add the new employee to the list
          setNewEmployee({ name: '', age: '', salary: '', role: '' }); // Reset the form
        })
        .catch((error) => {
          console.error('Error creating employee:', error);
        });
    };
  
    return (
      <>
        <form onSubmit={handleSubmit} className="col-12 col-md-11 col-lg-10 col-xl-9 p-5 my-5 border border-2 rounded-3 mx-auto">
          <h3 className='text-center mb-5'>Add New Employee</h3>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" id="name" name="name" value={newEmployee.name} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age:</label>
            <input type="number" className="form-control" id="age" name="age" value={newEmployee.age} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="salary" className="form-label">Salary:</label>
            <input type="number" className="form-control" id="salary" name="salary" value={newEmployee.salary} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role:</label>
            <input type="text" className="form-control" id="role" name="role" value={newEmployee.role} onChange={handleInputChange} required />
          </div>
          <button type="submit" className="btn btn-success mt-4 w-100">Add Employee</button>
        </form>
  
        {/* {employees.length > 0 ? (
          <ul>
            {employees.map(employee => (
              <li key={employee._id}>{employee.name} - {employee.role}</li>
            ))}
          </ul>
        ) : (
          <p>Loading employees...</p>
        )} */}
      </>
    );
}
