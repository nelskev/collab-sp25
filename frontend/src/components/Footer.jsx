import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Logo from '../assets/Logo2.png';

export default function Footer() {
    return (
        <footer className="footer m-0">
            <div className="container-fluid py-4 p-0 bg-primary bg-dark text-white mx-auto m-0 position-relative">
                <div className="row m-0 ms-3">
                    {/* Logo and Description */}
                    <section className="col-12 col-md-4 mb-4">
                        <div className="d-flex justify-content-center mb-0">
                            <Link to="/">
                                <img src={Logo} alt="logo" style={{ width: '150px', height: '150px' }} loading="lazy" />
                            </Link>
                        </div>
                        <p className="text-start p-2 mt-0">
                            Serving the Treasure Valley since 1986, we are a trusted auto body shop and can help! We fix everything from small dents and scratches, to custom paint, and complete collision repair. Don't take our word for it, read our <Link to="/list_reviews" className="text-decoration-none">reviews</Link>.
                        </p>
                    </section>

                    {/* Quick Links */}
                    <section className=" col-12 col-md-2 mt-4 ">
                        <nav className="nav flex-column mb-2">
                            <ul className=" list-unstyled d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
                                <li className="nav-item m-1">
                                    <Link to="/" className="nav-link p-0 fw-bold ">Home</Link>
                                </li>
                                <li className="nav-item m-1">
                                    <Link to="/AboutPage" className="nav-link p-0 fw-bold">About</Link>
                                </li>
                                <li className="nav-item m-1">
                                    <Link to="/location" className="nav-link p-0 fw-bold">Location</Link>
                                </li>
                                <li className="nav-item m-1">
                                    <Link to="/forms" className="nav-link p-0 fw-bold">Download Forms</Link>
                                </li>
                            </ul>
                        </nav>                        
                    </section>

                    {/* Hours of Operation */}
                    <section className="col-12 col-md-3 mb-4 mt-4">
                        <p className="fw-bold text-center text-md-start">Hours of Operation</p>
                        <p className="text-center text-md-start">Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p className="text-center text-md-start">Saturday - Sunday: Closed</p>
                        <p className="text-center text-md-start">Holidays: Closed</p>
                        <div className="d-flex flex-column gap-2 align-items-center align-items-md-start">
                            <Link className="btn btn-primary" to="/contact">Contact us</Link>
                            <Link className="btn btn-primary" to="/appointments">Appointment</Link>
                        </div>
                    </section>

                    {/* Contact Details */}
                    <section className="col-12 col-md-3 text-center text-md-start d-flex justify-content-end flex-column align-items-center align-items-md-start">
                        <p className="fw-bold">Contact Details</p>
                        <img src={'/owner_scott.png'} className="img-fluid rounded mb-2" width={100} alt="Scott's Picture" />
                        <p className="mb-2">Scott Didriksen</p>
                        <p className="m-2">
                            <a href="tel:+2087414097" className="text-decoration-none">
                                <i className="fa-solid fa-phone me-2"></i>208-562-3174
                            </a>
                        </p>
                        <p className="m-2">
                            <a href="mailto:vladkolmorgan@my.cwi.edu" className="text-decoration-none">
                                <i className="fa-solid fa-envelope me-2"></i>scottdidriksen@cwi.edu
                            </a>
                        </p>
                        <div className="social-media ms-2 d-flex justify-content-center justify-content-md-start">
                            <a href="https://www.facebook.com/" target="_blank" className="me-2"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/" target="_blank" className="me-2"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.twitter.com/" target="_blank" className="me-2"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/" target="_blank" className="me-2"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </section>
                </div>

     
                {/* This could be used on large screens to discard the lower div?? The div adds unneeded space at the bottom of the footer. */}
                {/* <button
                    className="btn btn-primary scroll-top-btn position-absolute bottom-50 end-0 me-2 d-none d-lg-block"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <i className="fa-solid fa-arrow-up me-2"></i>Top
                </button> */}

                {/* Scroll to Top Button */}
                <div className="d-flex justify-content-end p-3">
                    <button
                        className="btn btn-primary scroll-top-btn"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <i className="fa-solid fa-arrow-up me-2"></i>Top
                    </button>
                </div>
            </div>
        </footer>
    );
}