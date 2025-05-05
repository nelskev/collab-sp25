import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import BeforeImage from '../assets/CustPaintBefore1.jpg';
import AfterImage from '../assets/CustPaintAfter1.jpg';
import BeforeImage1 from '../assets/CustPaintBefore2.jpg';
import AfterImage1 from '../assets/CustPaintAfter2.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustPaintPage = () => {
        useEffect(() => {
            document.title = 'Specialty Painting'
        }, []);
  const imageSets = [
    { before: BeforeImage, after: AfterImage },
    { before: BeforeImage1, after: AfterImage1 },
  ];

  return (
    <div className='container py-5'>
      <div className='cards-wrapper'>

        <h2 
          className='section-header-blue text-center mb-3' 
          style={{
            paddingLeft: '0', 
            paddingTop: '1rem', 
            paddingBottom: '1rem' 
          }}>
          Specialty Painting
        </h2>

        {/* Carousel */}
        <div className='mb-3'
          style={{
          display: 'flex', 
          justifyContent: 'center'
        }}>
          <div style={{
            maxWidth: '900px', 
            width: '100%' 
          }}>
            <Carousel interval={4000} indicators={true}>
              {imageSets.map((set, idx) => (
                <Carousel.Item key={idx}>
                  <div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'nowrap',
                      width: '100%'
                    }}>
                    <div style={{ 
                      flex: '0 0 48%', 
                      textAlign: 'center' 
                    }}>
                      <img 
                        src={set.before} 
                        alt={`Before ${idx + 1}`} 
                        style={{ 
                          width: '100%', 
                          height: '300px', 
                          objectFit: 'cover' 
                        }} 
                      />
                      <p style={{ 
                         marginTop: '0.5rem', 
                         fontWeight: 'bold'
                        }}>Before</p>
                    </div>
                    <div style={{ 
                      flex: '0 0 48%', 
                      textAlign: 'center'
                    }}>
                      <img 
                        src={set.after} 
                        alt={`After ${idx + 1}`} 
                        style={{ 
                          width: '100%', 
                          height: '300px', 
                          objectFit: 'cover'
                        }} 
                      />
                      <p style={{ 
                        marginTop: '0.5rem', 
                        fontWeight: 'bold' 
                      }}>After</p>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Service description */}
        <div className='text-center mb-3'>
          <p className='mb-3'>
          Our custom car paint services refers to any paint job that goes beyond standard factory colors and finishes, allowing for unique designs and effects. This can include custom color matching, intricate designs, and the application of special effects like pearls, flaking, or airbrushing. The goal of custom paint is to create a one-of-a-kind appearance that reflects the owner's personality and style.
          </p>
        
        {/* FAQ */}
        <div className='accordion accordion-flush' id='accordionFlush'>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='flush-heading0'>
                <button 
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapse0'
                  aria-expanded='false' 
                  aria-controls='flush-collapse0'>
                How Does the Custom Paint Process Work?
                </button>
              </h2>
            <div 
              id='flush-collapse0'
              className='accordion-collapse collapse' 
              aria-labelledby='flush-heading0' 
              data-bs-parent='#accordionFlush'>
            <div className='accordion-body p-2 bg-light'>
            The car is carefully cleaned. Any areas not to be painted are taped. A paint coating is sprayed on. The car is placed in an oven and baked to cure the coating. Two or three additional paint coats are applied, and the car baked each time. Afterwards, clear coats are applied.
            </div>
          </div>

          <div className='accordion-item'>
            <h2 className='accordion-header' id='flush-heading1'>
              <button 
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse' 
                data-bs-target='#flush-collapse1' 
                aria-expanded='false' 
                aria-controls='flush-collapse1'>
                How Durable Is Custom Paint?
              </button>
            </h2>
            <div 
              id='flush-collapse1' 
              className='accordion-collapse collapse' 
              aria-labelledby='flush-heading1' 
              data-bs-parent='#accordionFlush'>
              <div className='accordion-body p-2 bg-light'>
              Yes, car paint is designed to be durable, providing protection against environmental factors and physical damage.
              </div>
            </div>
          </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-heading2'>
            <button 
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse' 
              data-bs-target='#flush-collapse2' 
              aria-expanded='false' 
              aria-controls='flush-collapse2'>
              What About Color Matching?
            </button>
          </h2>
          <div 
            id='flush-collapse2' 
            className='accordion-collapse collapse' 
            aria-labelledby='flush-heading2' 
            data-bs-parent='#accordionFlush'>
            <div className='accordion-body p-2 bg-light'>
            Our lastest paint technology allows for easy color matching on all vehicles.
            </div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-heading3'>
            <button 
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse' 
              data-bs-target='#flush-collapse3' 
              aria-expanded='false' 
              aria-controls='flush-collapse3'>
              How Much Does it Cost?
            </button>
          </h2>
          <div 
            id='flush-collapse3' 
            className='accordion-collapse collapse' 
            aria-labelledby='flush-heading3' 
            data-bs-parent='#accordionFlush'>
            <div className='accordion-body p-2 bg-light'>
            The total cost depends on factors including vehicle size, condition, paint quality, prep work and the color you choose.
            </div>
          </div>
        </div>

        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-heading4'>
            <button 
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse' 
              data-bs-target='#flush-collapse4' 
              aria-expanded='false' 
              aria-controls='flush-collapse4'>
              How Long Does it Take?
            </button>
          </h2>
          <div 
            id='flush-collapse4' 
            className='accordion-collapse collapse' 
            aria-labelledby='flush-heading4' 
            data-bs-parent='#accordionFlush'>
            <div className='accordion-body p-2 bg-light'>
            In general, you can expect a body shop to spend between 40 and 80 hours to complete a full paint job for your vehicle.
            </div>
          </div>
        </div>

      </div>

        </div>

        {/* Make Appointment button */}
        <div className='text-center mb-5'>
          <Link to='/appointment'>
            <button className='btn btn-primary w-100 fs-5'>
              Make Appointment
            </button>
          </Link>
        </div>
        </div>

      </div>
    </div>
  );
};

export default CustPaintPage;
