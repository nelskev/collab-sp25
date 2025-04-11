function ContactForm({
    name, setName,
    email, setEmail,
    phone, setPhone,
    //details, setDetails,
    handleSubmit,
}) {
    return (
        <form onSubmit={handleSubmit} className="p-2 my-3 col-12 col-med-9 col-lg-5 col-xl-4 mx-auto">
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            {/*
            <div className="mb-3">
                <label className="form-label">Details</label>
                <textarea className="form-control" value={details} onChange={(e) => setDetails(e.target.value)} required />
            </div>
            */}
            <button type="submit" className="btn btn-primary w-100 fs-5 mt-3 mb-2">
                Send Email
            </button>
        </form>
    );
}

export default ContactForm