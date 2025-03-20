import React from 'react'
import { Link } from 'react-router-dom';

// This page WILL NEED TO change browser tab title to 'ADMIN : Scotts Collision Repair'

export default function AdminHomePage() {
  return (
     <div className='d-flex justify-content-between align-items-center bg-black p-4'>
          <div className='text-white fs-4 fw-bold'>Admin Home Page</div>
    
          <Link to="/" className="m-0 text-end">
            <button className='btn btn-outline-light'>Home</button>
          </Link>
     </div>
  )
}  


