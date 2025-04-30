import styles from './CreateAppointmentForm.module.css';
import 'react-datepicker/dist/react-datepicker.css'
import DatePickerUI from './DatePickerUI'

// Send over props from AppointmentPage.jsx
function CreateAppointmentForm({
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
  }) {

  return (
    
  <div id='add-appointment-form' className="accordion-wrapper mx-auto">

    <div id="add-appointment-accordion" className={`accordion p-0 accordion-flush my-4 ${styles['accordion']}`}>
    
    <div className="accordion-item">
      <h2 className="accordion-header">
          <button className={`accordion-button collapsed fw-semibold mx-auto ${styles['accordion-button']}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
          Add Appointment
          </button>
      </h2>

    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#add-appointment-accordion">
    <div className="accordion-body m-0 p-0 px-lg-4 border border-2 bg-white">

      <form onSubmit={handleSubmit} className="p-2 my-3 col-12 mx-auto">
        
        <div className="d-flex flex-column flex-lg-row gap-3 w-100 justify-content-lg-around align-items-center mb-3 mx-auto">
            <DatePickerUI
                selectedDateTime={selectedDateTime}
                setSelectedDateTime={setSelectedDateTime}
                appointments={appointments}    // grey out taken appointment
            />
        </div>
      
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>  
          {nameError && <div className="text-danger">{nameError}</div>} 
        </div>
  
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <div className="text-danger">{emailError}</div>} 
        </div>
  
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
          {phoneError && <div className="text-danger">{phoneError}</div>} 
        </div>
  
        <div className="mb-3">
          <label className="form-label">Details</label>
          <textarea className="form-control" value={details} onChange={(e) => setDetails(e.target.value)}  />
          {detailsError && <div className="text-danger">{detailsError}</div>} 
        </div>
  
        <button type="submit" className="btn btn-primary w-100 fs-5 mt-3 mb-2">
          Schedule appointment
        </button>
      </form>

      </div>
      </div>
      </div>

      </div>

    </div>
    )
}
  
export default CreateAppointmentForm