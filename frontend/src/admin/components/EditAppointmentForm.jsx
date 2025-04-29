import React, { useEffect } from 'react'
import DatePickerUI from './DatePickerUI'

//   updateName, setUpdateName, updateEmail, setUpdateEmail, updatePhone, setUpdatePhone, updateDetails, setUpdateDetails, selectedAppointment, handleUpdateUser
function EditAppointmentForm({  
        updateName, setUpdateName, 
        nameError,                         // joi
        updateEmail, setUpdateEmail, 
        emailError,                        // joi
        updatePhone, setUpdatePhone, 
        phoneError,                        // joi
        updateDetails, setUpdateDetails, 
        detailsError,                      // joi
        selectedDateTime, setSelectedDateTime, appointments,
        selectedAppointment, 
        handleUpdateAppointment }
) {

  useEffect(() => {
    if (selectedAppointment) {
      setUpdateName(selectedAppointment.name || '');
      setUpdateEmail(selectedAppointment.email || '');
      setUpdatePhone(selectedAppointment.phone || '');
      setUpdateDetails(selectedAppointment.details || '');
  
      if (selectedAppointment.date && selectedAppointment.time) {
        const combinedDateTime = new Date(
          `${selectedAppointment.date.split('T')[0]}T${selectedAppointment.time}`
        );
        setSelectedDateTime(combinedDateTime);
      }
    }
  }, [selectedAppointment, setSelectedDateTime, setUpdateDetails, setUpdateEmail, setUpdateName, setUpdatePhone]);
  
  

  
  return (
    <form onSubmit={handleUpdateAppointment} className="p-0 my-3 col-12 mx-auto mx-0">
    <h3 className="section-header-blue fs-5 text-center fw-semibold m-0">Edit Appointment details</h3>

    <div className='form-body px-2'>

    <div className="d-flex flex-column flex-lg-row gap-3 w-100 justify-content-lg-around align-items-center mb-3 mx-auto">
        <DatePickerUI
            selectedDateTime={selectedDateTime}
            setSelectedDateTime={setSelectedDateTime}
            appointments={appointments}    // grey out taken appointment
        />
    </div>

    <div className="mb-3">
      <label className="form-label">Name</label>
      <input type="text" className="form-control" value={updateName} onChange={(e) => setUpdateName(e.target.value)} placeholder={selectedAppointment.name} />
      {nameError && <span className="text-danger">{nameError}</span>}            {/* joi  */}
    </div>

    <div className="mb-3">
      <label className="form-label">Email</label>
      <input type="email" className="form-control" value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} placeholder={selectedAppointment.email} />
      {emailError && <span className="text-danger">{emailError}</span>}          {/* joi  */}
    </div>

    <div className="mb-3">
      <label className="form-label">Phone</label>
      <input type="text" className="form-control" value={updatePhone} onChange={(e) => setUpdatePhone(e.target.value)} placeholder={selectedAppointment.phone} />
      {phoneError && <span className="text-danger">{phoneError}</span>}          {/* joi  */}
    </div>

    <div className="mb-3">
      <label className="form-label">Details</label>
      <textarea type="text" className="form-control" value={updateDetails} onChange={(e) => setUpdateDetails(e.target.value)} placeholder={selectedAppointment.details} /> 
      {detailsError && <span className="text-danger">{detailsError}</span>}      {/* joi  */}   
    </div>

    <button className="btn btn-primary w-100 fs-5 mt-3 mb-0">Save</button>

    </div>

  </form>
  )
}

export default EditAppointmentForm