import React from 'react'
import { Link } from 'react-router-dom';

export default function AdminNavbar() {

  return (
    <div className="navbar-wrapper">

     {/* Top Bar  */}
    <div className="top-info-bar w-100 d-flex justify-content-between py-5 px-4 bg-white">
        <div className="carbon-background">
  
             {/*/ ******* React Router Link HOME ******* /*/}
             {/* large Logo  */}
             <Link to="/"  className="left d-xs-none d-lg-flex flex-column logo-large link-underline link-underline-opacity-0" href="index.html">
                <h2 className="custom-blue m-0 fs-1">Scott's</h2>
                <h5 className="m-0">Collision Repair</h5>
             </Link>

            <div className="right d-flex flex-column justify-content-center gap-3">
            <Link to="/admin" className="text-decoration-none m-0" href="index.html">
            <h5 className="m-0 text-center fw-bold fs-4 text-warning">
                  ADMIN PANEL
                  </h5>
             </Link>


                {/*/ ******* React Router Link ADMIN ******* /*/}
                <Link to="/" className="m-0 text-center text-decoration-none">
                  <button className='m-0 btn btn-outline-light'>Back to Home</button>
                </Link>
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
                <h2 className="custom-blue m-0 fs-1">Scott's</h2>
                <h5 className="m-0">Collision Repair</h5>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3 p-md-0">

              <li className="nav-item">
                {/*/ ******* React Router Link APPOINTMENTS ******* /*/}
                <Link to="/adminappointments" className="m-0 text-end text-decoration-none nav-link">
                  Appointments
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#collision-repair">Collision Repair</a></li>
                  <li><a className="dropdown-item" href="#painting">Painting</a></li>
                  <li><a className="dropdown-item" href="#specialty-painting">Specialty Painting</a></li>
                </ul>
              </li> */}
              
              <li className="nav-item">
                {/*/ ******* React Router Link REVIEWS ******* /*/}
                <Link to="/adminreviews" className="m-0 text-end text-decoration-none nav-link">
                  Reviews
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
</div>

  )
}

