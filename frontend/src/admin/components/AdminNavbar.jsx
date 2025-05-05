import React from 'react'
// eslint-disable-next-line no-unused-vars
import { Link, useNavigate } from 'react-router-dom';
import AdminLogoutButton from './AdminLogoutButton';
import Logo from '../../assets/Logo.png';
import Logo1 from '../../assets/Logo3.png';
export default function AdminNavbar() {

  

  return (
    <div className="navbar-wrapper">

     {/* Top Bar  */}
    <div className="top-info-bar w-100 justify-content-between py-5 px-4">
        <div className="carbon-background">
  
             {/*/ ******* React Router Link HOME ******* /*/}
             {/* large Logo  */}
          <Link
            to="/"
            className="left d-xs-none d-lg-flex flex-column logo-large link-underline link-underline-opacity-0"
            href="index.html"
          >
             <img src={Logo}  alt="logo" style={{width: '200px', height: '80px'}}/>
   
          </Link>
   {/* {sessionStorage.getItem('_id') && (<Link to="/" className=" d-flex justify-content-end">
        <AdminLogoutButton /></Link>
        )} */}
            <div className="right d-flex flex-column justify-content-center gap-3">
            {/* <Link to="/admin" className="text-decoration-none m-0" href="index.html">
              <h5 className="m-0 text-center fw-bold fs-4 text-warning">
                ADMIN HOME
              </h5>
            </Link> */}

{sessionStorage.getItem('_id') && (<Link to="/" className="m-0 btn btn-outline-danger">
        <AdminLogoutButton /></Link>
        )}
     
                {/*/ ******* React Router Link ADMIN ******* /*/}
                {/* <Link to="/" className="m-0 text-center text-decoration-none">
                  <button 
                  className='m-0 btn btn-outline-light'>Back to Home</button>
                </Link> */}


<div className="m-0 text-end d-flex align-items-center">
  {sessionStorage.getItem("_id") && <h5 className="text-warning me-2">{sessionStorage.getItem('_username')}</h5>}
  <Link to="/">
  <img src={"./admin-icon.png"} alt="" width="30" />
  </Link>
</div>
            </div>

        </div>
    </div>

     {/* Navbar  */}
    <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">

          {/* Small Logo  */}
          {/*/ ******* Back to index.html ******* /*/}
          <Link to="/" className="navbar-brand d-md-none">
            <div className="left d-xs-none d-lg-flex flex-column logo-small"
            href="index.html">
                <img src={Logo1} alt="logo" style={{ width: '200px', height: '80px' }} loading="lazy"/>
            </div>
          </Link>

          {/* <Link to="/admin" className="text-decoration-none m-0 d-md-none" href="index.html">
              <button className="btn btn-primary m-0 p-1 px-2 fs-6">
                ADMIN HOME
              </button>
            </Link> */}

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3 p-md-0">

            <li className="nav-item">
                {/*/ ******* React Router Link APPOINTMENTS ******* /*/}
                <Link to="/admin" className="m-0 text-end text-decoration-none nav-link">
                  Admin Home
                </Link>
              </li>

              <li className="nav-item">
                {/*/ ******* React Router Link APPOINTMENTS ******* /*/}
                <Link to="/adminappointments" className="m-0 text-end text-decoration-none nav-link">
                  Appointments
                </Link>
              </li>

              
              <li className="nav-item">
                {/*/ ******* React Router Link REVIEWS ******* /*/}
                <Link to="/adminreviews" className="m-0 text-end text-decoration-none nav-link">
                  Reviews
                </Link>
              </li>

          

              {sessionStorage.getItem("_id") && (
                <li className='nav-item d-block d-md-none py-0'>
                <Link to="/" className="m-0 text-end text-decoration-none nav-link">
                  {/* Logout Admin {sessionStorage.getItem('_username')} */}
                <AdminLogoutButton className="m-0 text-end nav-link link-danger text-decoration-none"/>
                </Link>
                </li>
                )}



            </ul>
          </div>
        </div>
      </nav>
</div>

  )
}

