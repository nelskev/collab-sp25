import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import AfterImage from '../assets/collision_before.png';
import BeforeImage from '../assets/collision_after.png';
import AfterImage1 from '../assets/collision_before1.png';
import BeforeImage1 from '../assets/collision_after1.png';
import Carousel from 'react-bootstrap/Carousel';


const CollisionRepair = () => {

      useEffect(() => {
          document.title = 'Collision Repair'
      }, []);

 const imageSets = [
    { before: BeforeImage, after: AfterImage },
    { before: BeforeImage1, after: AfterImage1 },
  ];

  const faqs = [
    {
      question: 'How long does collision repair take?',
      answer: 'Most minor collision repairs can be completed within a few days. For more extensive damage, we’ll provide a time estimate after inspection.'
    },
    {
      question: 'Will the repaired area match the rest of my car?',
      answer: 'Yes. Our technicians use precision tools and factory-grade paint to ensure seamless integration with your vehicle’s original look.'
    },
    {
      question: 'Is collision repair covered by insurance?',
      answer: 'In most cases, yes. We work with all major insurance providers and can assist with your claim.'
    },
    {
      question: 'Can you fix frame damage?',
      answer: 'Yes. We use advanced frame-straightening equipment to repair structural damage safely and accurately.'
    },
    {
      question: 'How do I schedule a repair?',
      answer: 'Click the "Make an Appointment" button to choose a date and time that works best for you.'
    },
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
          }}>Collision Repair Services</h2>
     
        {/* Before and after images */}
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
  
        <div>
     
          <p className="description" style={{textAlign: 'center', padding: '40px'}}>
        We specialize in high-quality collision repair to get your vehicle looking brand new.
        Whether it’s a minor dent or major bodywork, our expert technicians will restore your car to its pre-accident condition.
      </p>
        </div>
  
        {/* Button linking to the appointments page */}
        <div>
            
        </div>
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
          <div className='text-center mb-5'>
                    <Link to='/appointment'>
                      <button className='btn btn-primary w-100 fs-5'>
                        Make Appointment
                      </button>
                    </Link>
                  </div>
          </div>
      </div>
    );
  };
  
  export default CollisionRepair ;