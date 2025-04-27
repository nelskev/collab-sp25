import React from 'react';

function ContactForm({
    name, setName,
    email, setEmail,
    phone, setPhone,
    details, setDetails,
    handleSubmit,
    // allErrors,
    nameError,
    emailError,
    phoneError,
    detailsError
}) {
    return (
        <form onSubmit={handleSubmit} className="p-2 my-3 col-12 col-med-9 col-lg-12 col-xl-5 mx-auto">

       <h1 className="p-2 border-bottom">Contact Form</h1>

       {/* <h1 className="sticky-top bg-white p-2 border-bottom">Contact Form</h1> */}

            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="John Smith" value={name} onChange={(e) => setName(e.target.value)} />
                {nameError && <span className="text-danger">{nameError}</span>} 
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="johnsmith@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                {emailError && <span className="text-danger">{emailError}</span>}
            </div>
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" placeholder="123-456-7890" value={phone} onChange={(e) => setPhone(e.target.value)} />
                {phoneError && <span className="text-danger">{phoneError}</span>}
            </div>
            <div className="mb-3">
                <label className="form-label">Details</label>
                <textarea className="form-control" placeholder="I am contacting because..." value={details} onChange={(e) => setDetails(e.target.value)} />
                {detailsError && <span className="text-danger">{detailsError}</span>}
            </div>
            
            <button type="submit" className="btn btn-primary w-100 fs-5 mt-3 mb-2">
                Submit Contact
            </button>
        </form>
    );
}


export default ContactForm


