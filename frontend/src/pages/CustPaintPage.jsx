import React from 'react';
import { Link } from 'react-router-dom';
import BeforeImage from '../assets/CustPaintBefore1.jpg';
import AfterImage from '../assets/CustPaintAfter1.jpg';
import BeforeImage1 from '../assets/CustPaintBefore2.jpg';
import AfterImage1 from '../assets/CustPaintAfter2.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustPaintPage = () => {
  const imageSets = [
    { before: BeforeImage, after: AfterImage },
    { before: BeforeImage1, after: AfterImage1 },
  ];

  const faqs = [
    {
      question: 'How Does the Custom Paint Process Work?',
      answer: 'The car is carefully cleaned. Any areas not to be painted are taped. A paint coating is sprayed on. The car is placed in an oven and baked to cure the coating. Two or three additional paint coats are applied, and the car baked each time. Afterwards, clear coats are applied.'
    },
    {
      question: 'How Durable Is Custom Paint?',
      answer: 'Yes, car paint is designed to be durable, providing protection against environmental factors and physical damage.'
    },
    {
      question: 'What About Color Matching?',
      answer: 'Our lastest paint technology allows for easy color matching on all vehicles.'
    },
    {
      question: 'How Much Does it Cost?',
      answer: 'The total cost depends on factors including vehicle size, condition, paint quality, prep work and the color you choose.'
    },
    {
      question: 'How Long Does it Take?',
      answer: 'In general, you can expect a body shop to spend between 40 and 80 hours to complete a full paint job for your vehicle.'
    },
  ];

  return (
    <div className='container py-3'>
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
        <div className='details-pane mb-3'
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
        <div className='details-pane text-center mb-3'>
          <p className='mb-3'>
          Our custom car paint services refers to any paint job that goes beyond standard factory colors and finishes, allowing for unique designs and effects. This can include custom color matching, intricate designs, and the application of special effects like pearls, flaking, or airbrushing. The goal of custom paint is to create a one-of-a-kind appearance that reflects the owner's personality and style.
          </p>
        
        {/* FAQ */}
          <div className='accordion accordion-flush' id='accordionFlush'>
            {faqs.map((faq, index) => (
              <div className='accordion-item' key={index}>
                <h2 className='accordion-header' id={`flush-heading${index}`}>
                  <button 
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse' 
                    data-bs-target={`#flush-collapse${index}`} 
                    aria-expanded='false' 
                    aria-controls={`flush-collapse${index}`}>
                    {faq.question}
                  </button>
                </h2>
                <div 
                  id={`flush-collapse${index}`} 
                  className='accordion-collapse collapse' 
                  aria-labelledby={`flush-heading${index}`} 
                  data-bs-parent='#accordionFlush'>
                  <div className='accordion-body p-2 bg-light'>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Make Appointment button */}
        <div className='details-pane text-center mb-4'>
          <Link to='/appointments'>
            <button className='btn btn-primary w-100 fs-5'>
              Make Appointment
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CustPaintPage;
