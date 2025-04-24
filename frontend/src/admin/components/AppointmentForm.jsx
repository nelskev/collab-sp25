import 'react-datepicker/dist/react-datepicker.css'
import DatePickerUI from './DatePickerUI'

// Send over props from AppointmentPage.jsx
function AppointmentForm({
    selectedDateTime, setSelectedDateTime,   // datepicker
    appointments,   // grey out taken appointment
    name, setName,                           // apptform
    email, setEmail,                       
    phone, setPhone,
    details, setDetails,
    handleSubmit,
    // allErrors,
    nameError,
    emailError,
    phoneError,
    detailsError

    
  }) 
  {
    return (
      <form onSubmit={handleSubmit} className="p-2 my-3 col-12 col-md-9 col-lg-5 col-xl-4 mx-auto">
        
        <div className="d-flex flex-column flex-lg-row gap-3 w-100 justify-content-lg-around align-items-center mb-3 mx-auto">
            <DatePickerUI
                selectedDateTime={selectedDateTime}
                setSelectedDateTime={setSelectedDateTime}
                appointments={appointments}    // grey out taken appointment
            />
        </div>
  
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}  />
          {nameError && <span className="text-danger">{nameError}</span>} 
        </div>
  
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}  />
          {emailError && <span className="text-danger">{emailError}</span>}
        </div>
  
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)}  />
          {phoneError && <span className="text-danger">{phoneError}</span>}
        </div>
  
        <div className="mb-3">
          <label className="form-label">Details</label>
          <textarea className="form-control" value={details} onChange={(e) => setDetails(e.target.value)}  />
          {detailsError && <span className="text-danger">{detailsError}</span>}
        </div>
  
        <button type="submit" className="btn btn-primary w-100 fs-5 mt-3 mb-2">
          Schedule Appointment
        </button>
      </form>
    );
  }
  
  export default AppointmentForm
