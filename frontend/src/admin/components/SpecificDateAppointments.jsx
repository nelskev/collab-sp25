import React from 'react'
import formatTimeAmPm from '/helpers/timeConversion'

function SpecificDateAppointments({
    setUpdateName,
    setUpdateEmail,
    setUpdatePhone,
    setUpdateDetails,
    todaysAppointments,
    setSelectedAppointment,
    dailyTimeSlots,
    handleDeleteAppointment,
    selectedDate,  
    handleCreateDateTime
  }) {

  // Returns MILITARY TIME to match 'dailyTimeSlots' array
  function formatTime(timeStr) {
    if (!timeStr) return 'Invalid Time';
  
    const [hours, minutes] = timeStr.split(':');
    const paddedHours = hours.padStart(2, '0'); 
    return `${paddedHours}:${minutes}`;
  }
  
  function formatDate(input) {
    let date;
  
    if (typeof input === 'string') {
      date = new Date(input);
    } else if (input instanceof Date) {
      date = input;
    } else {
      return 'Invalid Date';
    }
  
    const [year, month, day] = date.toISOString().split('T')[0].split('-');
    return `${month}/${day}/${year}`;
  }
  

  return (
    <>
  {dailyTimeSlots.map((timeSlot, index) => {
    const appointment = todaysAppointments.find((appt) => {
      const formattedApptTime = formatTime(appt.time); 
      return formattedApptTime === timeSlot;
    });
  
    if (appointment) {
      return (
        <div className="cards-wrapper" key={index}>
          <div className="card rounded-0 d-flex flex-column gap-3 gap-lg-0 flex-lg-row justify-content-lg-around align-items-lg-center p-3 p-lg-1 py-lg-2 m-0">
            <div className="col-12 col-lg-3">{formatDate(appointment.date)}</div>
            <div className="col-12 col-lg-3">{formatTimeAmPm(formatTime(appointment.time))}</div>
            <div className="col-12 col-lg-3">{appointment.name}</div>
  
            <div className="card-button-container col-12 col-lg-3 d-flex justify-content-between gap-2 me-3">
              <a
                type="button"
                className="btn btn-primary w-50 px-1"
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
              <a
                type="button"
                className="btn btn-danger w-50 px-1"
                onClick={() => handleDeleteAppointment(appointment._id, appointment.name)}
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="cards-wrapper" key={index}>
          <div className="card rounded-0 d-flex flex-column gap-3 gap-lg-0 flex-lg-row justify-content-lg-around align-items-lg-center p-3 p-lg-1 py-lg-2 m-0">
            <div className="col-12 col-lg-3">{formatDate(selectedDate)}</div>
            <div className="col-12 col-lg-3">{formatTimeAmPm(timeSlot)}</div>
            <div className="col-12 col-lg-6 text-end pe-0">
            <a
                type="button"
                className="btn btn-success col-12 col-lg-auto book-appointment-button"
                href="#add-appointment-form"
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
  })}
    </>
  );


}

export default SpecificDateAppointments