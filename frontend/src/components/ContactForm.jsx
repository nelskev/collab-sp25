import React from 'react';

function ContactForm({
    name, setName,
    email, setEmail,
    phone, setPhone,
    details, setDetails,
    handleSubmit,
}) {
    return (
        <form onSubmit={handleSubmit} className="p-2 my-3 col-12 col-med-9 col-lg-12 col-xl-5 mx-auto">

       <h1 className="p-2 border-bottom">Contact Form</h1>

       {/* <h1 className="sticky-top bg-white p-2 border-bottom">Contact Form</h1> */}

            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="John Smith" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="johnsmith@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" placeholder="1234567890" pattern="\d{7,15}$" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Details</label>
                <textarea className="form-control" placeholder="I am contacting because..." value={details} onChange={(e) => setDetails(e.target.value)} required />
            </div>
            
            <button type="submit" className="btn btn-primary w-100 fs-5 mt-3 mb-2">
                Submit Contact
            </button>
        </form>
    );
}


export default ContactForm


