import React from 'react';
import { Link } from 'react-router-dom';
import BeforeImage from '../assets/Paint_Before.jpg';
import AfterImage from '../assets/Paint_After.jpg';
import BeforeImage1 from '../assets/Paint_Before1.jpg';
import AfterImage1 from '../assets/Paint_After1.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaintDetailsPage = () => {
  const imageSets = [
    { before: BeforeImage, after: AfterImage },
    { before: BeforeImage1, after: AfterImage1 },
  ];

  const faqs = [
    {
      question: 'How long does a paint job take?',
      answer: 'Most paint jobs are completed within 1 hour appointments.'
    },
    {
      question: 'Will the new paint match my car’s original color?',
      answer: 'Yes. We use precision color-matching technology to ensure we match your vehicle’s finish.'
    },
    {
      question: 'Is the paint job covered by a warranty?',
      answer: 'Possibly.'
    },
    {
      question: 'Can you fix scratches and chips',
      answer: 'Yes.'
    },
    {
      question: 'How do I make an appointment',
      answer: 'Just click the "Make an Appointment" button to see available appointment slots.'
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
          Painting
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
            We specialize in paint repair that blends seamlessly with your car’s original finish. 
            Our experts provide perfect color matching and a smooth, factory-finish shine.
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

export default PaintDetailsPage;
