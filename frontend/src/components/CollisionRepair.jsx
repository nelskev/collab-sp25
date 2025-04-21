import React from 'react'
import { Link } from 'react-router-dom';
import BeforeImage from '../assets/before&After.jpeg'



const CollisionRepair = () => {

    
  
    return (
      <div>
  
  <h1>Collision Repair Services</h1>
     
        {/* Before and after images */}
        <div>
  
          <div>
            <img src={BeforeImage} alt='Before'/>
           
          </div>
  
         
  
        </div>
  
        <div>
          <p>Description of service</p>
          <p className="description">
        We specialize in high-quality collision repair to get your vehicle looking brand new.
        Whether it’s a minor dent or major bodywork, our expert technicians will restore your car to its pre-accident condition.
      </p>
        </div>
  
        {/* Button linking to the appointments page */}
        <div>
          <Link to='./pages/AppointmentPage.jsx'>
            <button>Make Appointment</button>
          </Link>
        </div>
        <div className="accordion-flush p-5" id="accordionFlush">
            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                How Does the Custom Paint Process Work?
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
                <div className="accordion-body p-2 bg-light">We work with all insurance companies, and in fact, we are a direct repair facility for many insurance companies.</div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                How Durable Is Custom Paint?
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlush">
                <div className="accordion-body p-2 bg-light">We do suggested scheduling an appointment through our easy-to-use form ahead of time, but if you find yourself short on time, please give us a call and we will try and fit you in as soon as convenient.</div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                What About Color Matching?
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlush">
                <div className="accordion-body p-2 bg-light">This is, of course, dependent on the complexity of the repairs, the situation, the availability of parts and materials, and much more. It truly varies from one situation to the next. We will provide an estimated time of completion at the same time we provide the cost estimate, although this does not include the time it may take for any additional damage repairs found in teardown. In the end, we would rather make sure that the job is done right, than done fast.</div>
            </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    How Much Will It Cost?
                </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlush">
                <div className="accordion-body p-2 bg-light">Your deductible is how much you have to pay for repairs, before your insurance kicks in for the rest. Depending on your level of insurance, this can run from zero dollars, up to thousands. Your deductible is due to Platinumwerks when you pick up your vehicle, and can be presented in check, credit card, or cash.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    How Much Time Will It Take?
                </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlush">
                <div className="accordion-body p-2 bg-light">Unfortunately, the first observation and inspection doesn’t always discover deep-down damages. During the course of repair, we may find further issues that need to be addressed. In this case, we will contact the insurance company for authorization to pay for any supplemental damages, and notify you before we take further action.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    Do You Offer A Warranty?
                </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlush">
                <div className="accordion-body p-2 bg-light">Yes – Scott’s Automotive Collision provides a limited lifetime warranty on parts and labor for the work we do. Please see our Warrant page for more information
                    We know there are plenty more questions you may have to ask – these are just the most common ones. Please do get in contact with our team here at Scott’s Automotive Collision regarding any other questions you may have, our team will be happy to help you out in any way we can. Here at Scott’s, we aim to provide the best customer service of any collision center in Nampa, so let us give you a hand.</div>
                </div>
            </div>
        </div>
  
      </div>
    );
  };
  
  export default CollisionRepair ;