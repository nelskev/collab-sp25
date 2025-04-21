import React from 'react'
import { Link } from 'react-router-dom';
import BeforeImage from '../assets/before&After.jpeg'



const CollisionRepair = () => {

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
  <div>


  <h1>Collision Repair Services</h1>
     
        {/* Before and after images */}
        <div className='cards-wrapper'>
  
          <div>
            <img src={BeforeImage} alt='Before'/>
           
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
  
  export default CollisionRepair ;