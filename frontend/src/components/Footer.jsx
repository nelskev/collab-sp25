import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark text-white mt-5 border border-3 pt-5">
            <div className="container bg-dark">
                <div className="row text-center text-lg-center">

                    <section className="col-12 col-lg-3 mb-4">
                        <div className="logo-small mb-3">
                            <Link to="/"  className="d-left flex-column align-items-center align-items-lg-start text-decoration-none" href="index.html">
                                <h4 className="custom-blue m-0 fs-1">Scott's</h4>
                                <h7 className="m-0">Collision Repair</h7>
                            </Link>
                        </div>
                        <p>Serving the Treasure Valley since 1986, we are a trusted auto body shop and can help! We fix everything from small dents and scratches, to custom paint, and complete collision repair. Don't take our word for it, read our <Link to="/list_reviews" className="">reviews</Link> </p>
                    </section> 

                    <nav className="col-12 col-lg-2 mb-4 nav text-center text=lg-center">
                        <ul className="list-unstyled">
                            <li className="nav-item">
                            <Link to="/" className="nav-link p-0">
                                Home
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/AboutPage" className="nav-link p-0">
                                About
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/location" className="nav-link p-0">
                                Location
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/forms" className="nav-link p-0">
                                Download Forms
                            </Link>
                            </li>
                        </ul>
                    </nav>

                    <section className="col-12 col-lg-3 mb-4">
                        <div className="text-start">
                            <p className="fw-bold">Hours of Operation</p>
                            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                            <p>Saturday - Sunday: Closed</p>
                            <p>Holidays: Closed</p>
                            <div className="d-flex flex-column gap-2 me-3">
                                <Link className="btn btn-success" to="/contact" >Contact us</Link>
                                <Link className="btn btn-success" to="/appointments">Appointment</Link>
                            </div>                                
                        </div>
                    </section>

                    <section className="col-12 col-lg-3 mb-4 ">
                        <p className="fw-bold">Contact Details</p>
                        <img src={'/owner_scott.png'} class="img-fluid rounded mb-2" width={100} alt="Scott's Picture" />
                        <div className="">
                        <p className="mb-2">Scott Didriksen</p>
                        <p className="m-2"><a href="tel:+2087414097"><i class="fa-solid fa-phone me-2"></i>208-562-3174</a></p>
                        <p className="m-2"><a href="mailto:vladkolmorgan@my.cwi.edu"><i class="fa-solid fa-envelope me-2"></i>scottdidriksen@cwi.edu</a></p>
                        </div>
                        <div className="social-media">
                            <a href="https://www.facebook.com/" target="_blank" className="me-2"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/" target="_blank" className="me-2"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.twitter.com/" target="_blank" className="me-2"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/" target="_blank" className="me-2"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </section>
                </div>
            </div>
            <div className="text-center mt-4 mb-4">
                <button 
                    className="btn btn-primary scroll-top-btn" 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    ↑ Back to Top
                </button>
            </div>

        </footer>
    );
}