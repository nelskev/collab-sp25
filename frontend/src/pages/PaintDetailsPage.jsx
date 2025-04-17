import React from 'react';
import { Link } from 'react-router-dom';
import BeforeImage from '../assets/Paint_Before.jpg';
import AfterImage from '../assets/Paint_After.jpg';


const PaintDetailsPage = () => {



    return (
      <div>

        <h2>Painting</h2>

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
          <Link to='/appointments'>
            <button>Make Appointment</button>
          </Link>
        </div>

      </div>
    );
  };

  export default PaintDetailsPage;