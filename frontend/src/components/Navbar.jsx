import React from 'react'

export default function Navbar() {
  return (
    <div class="navbar-wrapper">
     {/* Top Bar  */}
    <div class="top-info-bar w-100 d-flex justify-content-between py-5 px-4 bg-white">
        <div class="carbon-background">
             {/* large Logo  */}
            <a class="left d-xs-none d-lg-flex flex-column logo-large link-underline link-underline-opacity-0" href="index.html">
                <h2 class="custom-blue m-0 fs-1">Scott's</h2>
                <h5 class="m-0">Collision Repair</h5>
            </a>
            <div class="right d-flex flex-column justify-content-center gap-3">
                <h5 class="m-0 text-center fw-bold fs-4">555-123-3498</h5>
                <a class="m-0 text-end" href="#">
                  <img src={'./admin-icon.png'} alt="" width='30'/>
                </a>
            </div>
        </div>
    </div>

     {/* Navbar  */}
    <nav class="navbar navbar-expand-md bg-body-tertiary">
        <div class="container-fluid">
          {/* Small Logo  */}
          <a class="navbar-brand d-md-none" href="index.html">
            <div class="left d-xs-none d-lg-flex flex-column logo-small">
                <h2 class="custom-blue m-0 fs-1">Scott's</h2>
                <h5 class="m-0">Collision Repair</h5>
            </div>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 p-3 p-md-0">
              {/* <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="#appointments">Appointments</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#collision-repair">Collision Repair</a></li>
                  <li><a class="dropdown-item" href="#painting">Painting</a></li>
                  <li><a class="dropdown-item" href="#specialty-painting">Specialty Painting</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Reviews</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Directions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Download Forms</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</div>
  )
}
