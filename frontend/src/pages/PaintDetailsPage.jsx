import React from 'react';
import { Link } from 'react-router-dom';
import BeforeImage from '../assets/Paint_Before.jpg';
import AfterImage from '../assets/Paint_After.jpg';

const PaintDetailsPage = () => {
  return (
    <div className="container">

      <div className="cards-wrapper">

        <h2 
          className="section-header-blue" 
          style={{ 
            alignItems: 'center',
            paddingLeft: '12rem',
            paddingTop: '2rem',
            paddingBottom: '2rem'
          }}>
            Painting
        </h2>

        {/* Before and after images */}
        <div 
          className="details-pane" 
          style={{
              display: 'flex', 
              justifyContent: 'space-around', 
              }}>
          
          <div style={{textAlign: 'center'}}>
            <img 
              src={BeforeImage} 
              alt="Before" 
              style={{maxWidth: '100%'}}/>
            <p style={{paddingTop: '.5rem'}}>Before</p>
          </div>

          <div style={{textAlign: 'center'}}>
            <img 
              src={AfterImage}
              alt="After" 
              style={{maxWidth: '100%'}}/>
            <p style={{paddingTop: '.5rem'}}>After</p>
          </div>

        </div>

        {/* Service description */}
        <div 
          className="details-pane" 
          style={{textAlign: 'center'}}>
          <p> We specialize in paint repair that blends seamlessly with your car’s original finish. 
            Our experts provide perfect color matching and a smooth, factory-finish shine.
            </p>
        </div>

        {/* Make Appointment button */}
        <div 
          className="details-pane" 
          style={{textAlign: 'center'}}>
            <Link to="/appointments">
              <button style={{fontSize: '1.2rem'}}>
                Make Appointment
              </button>
            </Link>
        </div>

      </div>

    </div>
  );
};

export default PaintDetailsPage;
