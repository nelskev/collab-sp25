import React from 'react'
import formatDate from '/helpers/dateConversion'
import formatTimeAmPm from '/helpers/timeConversion'

function SearchAppointment({
    setUpdateName, 
    //nameError,                         // joi
    setUpdateEmail, 
    // emailError,                        // joi
    setUpdatePhone, 
    // phoneError,                        // joi
    setUpdateDetails, 
    // detailsError,                      // joi
    appointments,
    setSelectedAppointment,
    handleDeleteAppointment,
    handleCreateDateTime
}) {
    
    const userList = appointments.map((appointment) => {
        {/* CARDS WRAPPER */}
        if(appointment) {
        return(
            <div className="cards-wrapper bg-warning" >
              <div className="card rounded-0 d-flex my-0 mb-lg-2 flex-column gap-3 gap-lg-0 flex-lg-row justify-content-lg-around align-items-lg-center p-3 p-lg-1 m-0">
                <div className="col-12 col-lg-3">{formatDate(appointment.date)}</div>
                <div className="col-12 col-lg-3">{formatTimeAmPm(appointment.time)}</div>
                <div className="col-12 col-lg-3">{appointment.name}</div>

                <div className="card-button-container col-12 col-lg-3 d-flex justify-content-around gap-2 gap-lg-0">
                  <a
                    type="button"
                    className="btn btn-outline-primary col-5 col-lg-auto p-1"
                    href="#details-pane-wrapper"
                    onClick={() => {
                      setSelectedAppointment(appointment);
                      setUpdateName(appointment.name);
                      setUpdateEmail(appointment.email);
                      setUpdatePhone(appointment.phone);
                      setUpdateDetails(appointment.details);
                    }}
                  >
                    Details
                  </a>
                  <a type="button" className="btn btn-outline-danger col-5 col-lg-auto p-1" onClick={() => handleDeleteAppointment(appointment._id)} >
                    Delete
                  </a>
                </div>

              </div>
            </div>
        )} else {
          return (
                  <div className="cards-wrapper" key={index}>
                    <div className="card rounded-0 d-flex flex-column gap-3 gap-lg-0 flex-lg-row justify-content-lg-around align-items-lg-center p-3 p-lg-1 py-lg-2 m-0">
                      <div className="col-12 col-lg-3">{formatDate(new Date())}</div>
                      <div className="col-12 col-lg-3">{formatTimeAmPm(timeSlot)}</div>
                      <div className="col-12 col-lg-6 text-end pe-1">
                        {/* Book - Available Button */}
                        <a
                          type="button"
                          className="btn btn-outline-success p-1"
                          href="#create-appointment-form"
                          onClick={() => {
                          document.querySelector('#add-appointment-accordion .accordion-button')?.click();
                          handleCreateDateTime(formatDate(new Date().toISOString()), timeSlot);
                        }}
                        // onClick={() => handleBookAppointment(appointment._id, appointment.name)}
                        >
                          Book - Available
                        </a>
                      </div>
                    </div>
                  </div>
                );          
        }
    })

     return (
        <>
        <div>{userList}</div>
        </>
    )

}


export default SearchAppointment

