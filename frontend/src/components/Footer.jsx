import React from "react";
import { Link } from "react-router-dom";
import AdminLogoutButton  from "../admin/components/AdminLogoutButton.jsx"

export default function Footer() {
    
    function handleRefresh() {
        window.location.reload();
      } // Refresh page to remove admin logout buttons

    return (
        <footer className="bg-dark text-white mt-5 border border-3 pt-5">
            <div className="row">

                <section className="col m-3">
                    <div className="logo-small mb-3">
                        <Link to="/"  className="left d-xs-none d-lg-flex flex-column logo-large link-underline link-underline-opacity-0" href="index.html">
                            <h4 className="custom-blue m-0 fs-1">Scott's</h4>
                            <h7 className="m-0">Collision Repair</h7>
                        </Link>
                    </div>
                    <p>Serving the Treasure Valley since 1986, we are a trusted auto body shop and can help! We fix everything from small dents and scratches, to custom paint, and complete collision repair. Don't take our word for it, read our <Link to="/list_reviews" className="">reviews</Link> </p>
                </section> 

                <nav className="col m-3 nav flex-column">
                    <ul className="list-unstyled">
                        <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/AboutPage" className="nav-link">
                            About
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/location" className="nav-link">
                            Location
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="#" className="nav-link">
                            Download Forms
                        </Link>
                        </li>

                        {sessionStorage.getItem("_id") && (
                        <li className='nav-item'>
                        <Link to="#"  className="nav-link link-danger">
                        <AdminLogoutButton onClick={handleRefresh}/>
                        </Link>
                        </li>
                        )}


                    </ul>
                </nav>

                <section className="col m-3">
                    <div className="text-start">
                        <p>Hours of Operation</p>
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday - Sunday: Closed</p>
                        <p>Holidays: Closed</p>
                        <div className="button-group">
                            <Link className="btn btn-success me-3 " to="/contact" >Contact us</Link>
                            <Link className="btn btn-success ms-3 " to="/appointments">Appointment</Link>
                        </div>                                
                    </div>
                </section>

                <section className="contact-info col m-3">
                    <p className="">Contact Details</p>
                    <img src={'/owner_scott.png'} class="img-fluid rounded-start" width={100} alt="Scott's Picture" />
                    <div>
                    <p>Scott Didriksen</p>
                    <p><a href="tel:+2087414097"><i class="fa-solid fa-phone me-2"></i>208-562-3174</a></p>
                    <p><a href="mailto:vladkolmorgan@my.cwi.edu"><i class="fa-solid fa-envelope me-2"></i>scottdidriksen@cwi.edu</a></p>
                    </div>
                    <div className="social-media">
                        <a href="https://www.facebook.com/" target="_blank" className="me-2"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/" target="_blank" className="me-2"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.twitter.com/" target="_blank" className="me-2"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/" target="_blank" className="me-2"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </section>
            </div>
        </footer>
    );
}