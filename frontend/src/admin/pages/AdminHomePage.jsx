import React, {useEffect} from 'react'
import AdminNavbar from '../components/AdminNavbar';

// This page WILL NEED TO change browser tab title to 'ADMIN : Scotts Collision Repair'

export default function AdminHomePage() {
        useEffect(() => {
            document.title = 'Admin Home'
        }, []);
  return (
    <>
      <AdminNavbar />

      <div className='my-5'>
        <h1 class="alert alert-primary col-11 col-lg-8 mx-auto text-center fs-3" role="alert">
            Admin Home Page
        </h1>
      </div>

    </>
  )
}  
