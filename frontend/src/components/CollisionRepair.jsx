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
  
      </div>
    );
  };
  
  export default CollisionRepair ;