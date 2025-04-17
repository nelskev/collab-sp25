import React from 'react'
import { Link } from 'react-router-dom';
import BeforeImage from '../assets/CustPaint_Before.png'
import AfterImage from '../assets/CustPaint_After.png'


const CustPaintPage = () => {

    
  
    return (
      <div>
  
        <h2>Specialty Painting</h2>
  
        {/* Before and after images */}
        <div>
  
          <div>
            <img src={BeforeImage} alt='Before'/>
            <p>Before</p>
          </div>
  
          <div>
            <img src={AfterImage} alt='After'/>
            <p>After</p>
          </div>
  
        </div>
  
        <div>
          <p>Description of service</p>
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
  
  export default CustPaintPage;