import React, { useEffect } from "react";
import backgroundImage from "../assets/scott's-shop.png";

export default function LocationPage() {
    useEffect(() => {
        document.title = "Location";
    }, []);

    return (
        <div className="container-fluid mt-5 mb-5" >
            <div className="row align-items-stretch">

               
                <section className="col-lg-6 col-12 p-3 m-auto text-center">
                    <h1>Nampa Location</h1>
                    <h2>Visit Us at:</h2>
                    <p>
                        <i className="fa-solid fa-location-dot me-2"></i>
                        5500 E Opportunity Dr, Nampa, ID 83687
                    </p>
                    <img
                        className="img-fluid rounded mt-3 border border-3"
                        src={backgroundImage}
                        alt="Scott's Shop"
                        width="500"
                        height="auto"
                    />
                </section>

                
                <section className="col-lg-6 col-12 p-3 m-auto text-center">
                    <iframe
                        className="border border-3 rounded"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.6341202116396!2d-116.50980592382531!3d43.61415917110404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae4d7b62c56f7f%3A0xd03501e762c399a!2sNampa%20Campus%20Academic%20Building%2C%205500%20E%20Opportunity%20Dr%2C%20Nampa%2C%20ID%2083687!5e0!3m2!1sen!2sus!4v1744835469391!5m2!1sen!2sus"
                        width="350"
                        height="250"
                        allowFullScreen=""
                        loading="lazy"
                        title="Nampa Location"
                    ></iframe>
                </section>

                

            </div>
        </div>
    );
}
