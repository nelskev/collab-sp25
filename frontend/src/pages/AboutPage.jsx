import React from 'react'
import Scott from '../assets/owner_scott.png'


export default function AboutPage() {
  return (
    <div>
        <h1>About Us</h1>

        <div className="text-center">
            <img src={Scott} className="rounded" alt="owner scott" style={{width: '300px', height: '300px'}}/>
        </div>

        <p style={{textAlign: 'center', padding: '40px'}}>Located in Nampa, Idaho, Scott’s Automotive Repair is your locally operated and family-owned repair facility. Owner, Scott Didrikson, is a seasoned expert boasting over 30 years of experience in collision repair services. Recognizing a need for reliable and affordable automotive repair in our community, Scott opened his business and as the community grew so did our shop. You can trust that our skilled technicians are committed to delivering top-tier service to restore your vehicle with precision, whether it be a minor fender bender or a major collision. Let us provide you with excellent customer service by booking an appointment with Scott’s Automotive today!</p>

        <h2>FAQs</h2>

        <div className="accordion accordion-flush" id="accordionFlush">
            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Do You Work With Insurance Companies?
                </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
                <div className="accordion-body">We work with all insurance companies, and in fact, we are a direct repair facility for many insurance companies.</div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Do I Need An Appointment?
                </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlush">
                <div className="accordion-body">We do suggested scheduling an appointment through our easy-to-use form ahead of time, but if you find yourself short on time, please give us a call and we will try and fit you in as soon as convenient.</div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                How Long Will Repairs Take?
                </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlush">
                <div className="accordion-body">This is, of course, dependent on the complexity of the repairs, the situation, the availability of parts and materials, and much more. It truly varies from one situation to the next. We will provide an estimated time of completion at the same time we provide the cost estimate, although this does not include the time it may take for any additional damage repairs found in teardown. In the end, we would rather make sure that the job is done right, than done fast.</div>
            </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    What is My Deductible, and Who Do I Pay it To?
                </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlush">
                <div className="accordion-body">Your deductible is how much you have to pay for repairs, before your insurance kicks in for the rest. Depending on your level of insurance, this can run from zero dollars, up to thousands. Your deductible is due to Platinumwerks when you pick up your vehicle, and can be presented in check, credit card, or cash.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                    What Happens if Additional Damage is Found After the Estimate?
                </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlush">
                <div className="accordion-body">Unfortunately, the first observation and inspection doesn’t always discover deep-down damages. During the course of repair, we may find further issues that need to be addressed. In this case, we will contact the insurance company for authorization to pay for any supplemental damages, and notify you before we take further action.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                    Are my Repairs Warrantied?
                </button>
                </h2>
                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlush">
                <div className="accordion-body">Yes – Scott’s Automotive Collision provides a limited lifetime warranty on parts and labor for the work we do. Please see our Warrant page for more information
                    We know there are plenty more questions you may have to ask – these are just the most common ones. Please do get in contact with our team here at Scott’s Automotive Collision regarding any other questions you may have, our team will be happy to help you out in any way we can. Here at Scott’s, we aim to provide the best customer service of any collision center in Nampa, so let us give you a hand.</div>
                </div>
            </div>
        </div>
    </div>
  )
}