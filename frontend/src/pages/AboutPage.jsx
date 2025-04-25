import React, { useEffect } from 'react'
import Shine from '../assets/CarShine.jpg'


export default function AboutPage() {


    useEffect(() => {
        // document.title = window.location.href
        document.title = 'About Page'
    }, []);

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
        Who We Are
      </h2>

        <div className="text-center">
            <img src={Shine} className="rounded" alt="owner scott" style={{width: '400px', height: '300px'}}/>
        </div>

        {/* Example accordion that works just fine now, without being influenced by global css! */}
        {/* <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       Do You Work With Insurance Companies?
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>We work with all insurance companies, and in fact, we are a direct repair facility for many insurance companies.</strong>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                       Do I Need An Appointment?
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>We do suggested scheduling an appointment through our easy-to-use form ahead of time, 
                            but if you find yourself short on time, please give us a call and we will try and fit you in as soon as convenient.</strong> 
                    </div>
                    </div>
                </div>
            </div> */}



                {/* Service description */}
                <div className='details-pane text-center mb-3'>
          <p className='mb-3'>
          Located in Nampa, Idaho, Scott’s Automotive Repair is your locally operated and family-owned repair facility. Owner, Scott Didrikson, is a seasoned expert boasting over 30 years of experience in collision repair services. Recognizing a need for reliable and affordable automotive repair in our community, Scott opened his business and as the community grew so did our shop. You can trust that our skilled technicians are committed to delivering top-tier service to restore your vehicle with precision, whether it be a minor fender bender or a major collision. Let us provide you with excellent customer service by booking an appointment with Scott’s Automotive today!
          </p>
        

        <h2>FAQs</h2>

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
                Do You Work With Insurance Companies?
                </button>
              </h2>
            <div 
              id='flush-collapse0'
              className='accordion-collapse collapse' 
              aria-labelledby='flush-heading0' 
              data-bs-parent='#accordionFlush'>
            <div className='accordion-body p-2 bg-light'>
            We work with all insurance companies, and in fact, we are a direct repair facility for many insurance companies.
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
                Do I Need An Appointment?
              </button>
            </h2>
            <div 
              id='flush-collapse1' 
              className='accordion-collapse collapse' 
              aria-labelledby='flush-heading1' 
              data-bs-parent='#accordionFlush'>
              <div className='accordion-body p-2 bg-light'>
              We do suggested scheduling an appointment through our easy-to-use form ahead of time, but if you find yourself short on time, please give us a call and we will try and fit you in as soon as convenient.
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
              How Long Will Repairs Take?
            </button>
          </h2>
          <div 
            id='flush-collapse2' 
            className='accordion-collapse collapse' 
            aria-labelledby='flush-heading2' 
            data-bs-parent='#accordionFlush'>
            <div className='accordion-body p-2 bg-light'>
            This is, of course, dependent on the complexity of the repairs, the situation, the availability of parts and materials, and much more. It truly varies from one situation to the next. We will provide an estimated time of completion at the same time we provide the cost estimate, although this does not include the time it may take for any additional damage repairs found in teardown. In the end, we would rather make sure that the job is done right, than done fast.
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
              What is My Deductible, and Who Do I Pay it To?
            </button>
          </h2>
          <div 
            id='flush-collapse4' 
            className='accordion-collapse collapse' 
            aria-labelledby='flush-heading4' 
            data-bs-parent='#accordionFlush'>
            <div className='accordion-body p-2 bg-light'>
            Your deductible is how much you have to pay for repairs, before your insurance kicks in for the rest. Depending on your level of insurance, this can run from zero dollars, up to thousands. Your deductible is due to Platinumwerks when you pick up your vehicle, and can be presented in check, credit card, or cash.
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
    </div>
    </div>
  )
}