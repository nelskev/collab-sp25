import React from 'react'
import EmployeeCard from './../components/EmployeeCard';
import EmployeeForm from './../components/EmployeeForm';
import AdminNavbar from '../components/AdminNavbar';

// This page WILL NEED TO change browser tab title to 'ADMIN : Scotts Collision Repair'

export default function AdminHomePage() {
  return (
    <>
      <AdminNavbar />

      <div className='pb-5'>
          <EmployeeForm />
          <EmployeeCard />
      </div>
    </>
  )
}  
