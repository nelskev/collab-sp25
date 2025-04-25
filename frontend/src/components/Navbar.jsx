import React, { useState } from "react";
import { Link } from "react-router-dom";
// import handleLogout from "../admin/components/HandleLogout";
import { useNavigate } from "react-router-dom"; //For handleLogout function
import AdminLogoutButton from "../admin/components/AdminLogoutButton"; //For handleLogout function
import Logo from '../assets/Logo2.png';

export default function Navbar() {
  const handleRefresh = () => {
    window.location.reload();
  }; // Refresh page to remove admin logout buttons

  return (
    <div className="navbar-wrapper">
      {/* Top Bar  */}
      <div className="top-info-bar w-100 justify-content-between py-5 px-4 bg-white">
        <div className="carbon-background">
          {/*/ ******* React Router Link HOME ******* /*/}
          {/* large Logo  */}
          <Link
            to="/"
            className="left d-xs-none d-lg-flex flex-column logo-large link-underline link-underline-opacity-0"
            href="index.html"
          >
             <img src={Logo}  alt="logo" style={{width: '300px', height: '300px'}}/>
   
          </Link>

          <div className="right d-flex flex-column justify-content-center gap-3">
         
         {/*    {sessionStorage.getItem("_id") && (
              <button
                className="m-0 btn btn-outline-light"
                onClick={handleLogout}
              >
                Admin logout
              </button>
            )} */}


          {/* When Logged In */}
        {sessionStorage.getItem("_id") && (
          <>


          <AdminLogoutButton className="m-0 btn btn-outline-danger" onClick={handleRefresh}/>
          <Link to="/admin" className="m-0 text-end d-flex align-items-center text-decoration-none">  
          {sessionStorage.getItem("_id") && <h5 className="text-warning me-2">{sessionStorage.getItem('_username')}</h5>}
          <img src={"./admin-icon.png"} alt="" width="30" />
          </Link>


          
          </>
          )}
       

          {/* When logged out */}
         {!sessionStorage.getItem("_id") &&   (
          <>
          <h5 className="m-0 text-center fw-bold fs-4">555-123-3498</h5> {/* Phone number will be invisible when admin logged in */}
          <Link to="/adminlogin" className="m-0 text-end">

              <img src={"./admin-icon.png"} alt="" width="30" />
            </Link>
          </>
          )}

         

            {/*/ ******* React Router Link ADMIN ******* /*/}
            {/* <Link to="/adminlogin" className="m-0 text-end">
              {sessionStorage.getItem("_id") && <h5 className="text-warning">   Hello {sessionStorage.getItem('_username')}</h5>}
              <img src={"./admin-icon.png"} alt="" width="30" />
            </Link> */}
          </div>
        </div>
      </div>

      {/* Navbar  */}
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          {/* Small Logo  */}
          {/*/ ******* Internal Link (scroll down) can be Anchor ******* /*/}
          <a className="navbar-brand d-md-none" href="index.html">
            <div className="left d-xs-none d-lg-flex flex-column logo-small">
              
              {/* <img src={Logo}  alt="logo" style={{width: '200px', height: '200px'}}/> */}
              <h2 className="custom-blue m-0 fs-1">Scott's</h2>
              <h5 className="m-0">Collision Repair</h5>
            </div>
          </a>

          {/*/ ******* React Router Link ADMIN ******* /*/}
          <Link to="/admin" className="m-0 text-end d-md-none d-flex align-items-center text-decoration-none">
            <img src={"./admin-icon.png"} alt="" width="30" />
            {sessionStorage.getItem("_id") && <h5 className="ms-2">{sessionStorage.getItem('_username')}</h5>}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3 p-md-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/appointments">
                  Appointments
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/collision-repair">Collision Repair</Link></li>
               
                  
                  
                  <li>
                    {/*/ ******* React Router Link PAINTDETAILS ******* /*/}
                    <Link to="/PaintDetailsPage">
                      <a className="dropdown-item">Painting</a>
                    </Link>
                  </li>

                  {/* <li><a className="dropdown-item" href="#CustPaintPage">Specialty Painting</a></li> */}
                  <li>
                    <a className="dropdown-item" href="#specialty-painting">
                      {
                        <Link
                          to="/CustPaintPage"
                          className="m-0 text-end"
                          style={{ textDecoration: "none" }}
                        >
                          Specialty Painting
                        </Link>
                      }
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                {/*/ ******* React Router Link REVIEWS ******* /*/}
                <Link to="/list_reviews" className="nav-link">
                  Reviews
                </Link>
              </li>
              
              {sessionStorage.getItem("_id") && (
                <li className='nav-item d-md-none'>
                <Link to="/" className="text-decoration-none nav-link text-danger">
                  {/* Logout Admin {sessionStorage.getItem('_username')} */}
                <AdminLogoutButton className="" onClick={handleRefresh}/>
                </Link>
                </li>
                )}

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
