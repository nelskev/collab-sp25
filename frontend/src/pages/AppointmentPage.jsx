import React, { useEffect, useState } from "react";
import AppointmentForm from "../admin/components/AppointmentForm";
import ConfirmationModal from "../components/ConfirmationModal";
import userFrontendSchema from "../admin/validation/appointmentFormValidation";

const AppointmentPage = () => {
  
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [details, setDetails] = useState('')
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

    // JOI
    const [nameError, setNameError] = useState(null);   
    const [emailError, setEmailError] = useState(null);
    const [phoneError, setPhoneError] = useState(null);
    const [detailsError, setDetailsError] = useState(null);
    const [allErrors, setAllErrors] = useState([]);

  const fetchData = async () => {
    try {
      // Fetch existing appointments from the server
      const response = await fetch(`/appointments`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setAppointments(data)
      console.log('Server response:', data)
    } catch (error) {
      console.error('Error:', error)
    }
  }
  //  Load existing appointments
  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    document.title = 'Appointments'
  }, [])

  const handleAppointmentCreated = () => {
    fetchData()     // add new appointment
  }

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!selectedDateTime) {
      setErrorMessage('Please select a date and time.')
      return
    }
    setErrorMessage('') 
    // Clear Joi
    setNameError('')
    setEmailError('')
    setPhoneError('')
    setDetailsError('')
    setAllErrors([])

        // Use Joi to validate the data
    const validationResult = userFrontendSchema.validate({ name: name, email: email, phone: phone, details: details },
      { abortEarly: false })  // need 'abortEarly' to see all error messages at the same time

      if (validationResult.error) {
          const errors = validationResult.error.details
          errors.forEach(error=>{
            switch(error.context.key){
                case 'name':
                    setNameError(error.message)
                    break;
                case 'email':
                    setEmailError(error.message)
                    break;
                case 'phone':
                    setPhoneError(error.message)
                    break;
                case 'details':
                    setDetailsError(error.message)
                    break;
                default:
                    break;
            }
        })
        
          const messages = errors.map(error => error.message);
          setAllErrors(messages);

          return;
      }

      const offset = selectedDateTime.getTimezoneOffset()
      const adjustedTime = new Date(selectedDateTime.getTime() - offset * 60 * 1000)

      try {
        const response = await fetch('/appointments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: adjustedTime.toISOString().split('T')[0],
            time: adjustedTime.toISOString().split('T')[1].slice(0, 5),
            name,
            email,
            phone,
            details,
          }),
        })

        const result = await response.json()
        console.log('Server response:', result)

        if (response.ok) {
          console.log('Appointment created successfully')
          handleAppointmentCreated()   // call method to add new appointment if successful

          setShowModal(true)  // Show confirmation modal
          // Clear all fields/inputs if successful
          setSelectedDateTime(null)  
          setName('')
          setEmail('')
          setPhone('')
          setDetails('')

        } else {
          console.error('Failed to create appointment')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

  return (
    
    <div className="container d-flex flex-column bg-light border border-1 rounded-4 gap-0 gap-lg-2 py-2 p-lg-3 my-2 my-lg-4">
      <h2 className="text-center fs-3 m-0 mt-1">Book Your Appointment</h2>
      

      {errorMessage && (
        <div className="alert alert-danger text-center" role="alert">
          {errorMessage}
        </div>
      )}
            
      {!selectedDateTime && (
        <p className="text-center" style={{marginBottom: '-32px' /* Keeps form from bouncing up when date is selected */ }}>Please note that appointments marked in <a className="text-danger text-decoration-none">red</a> are unavailable times!</p>
      )}

      {/*  Form to submit details */}
      <AppointmentForm
         selectedDateTime={selectedDateTime}
         setSelectedDateTime={setSelectedDateTime}
         appointments={appointments} // Pass the appointments to the AppointmentForm component
         name={name}
         setName={setName}
         email={email}
         setEmail={setEmail}
         phone={phone}
         setPhone={setPhone}
         details={details}
         setDetails={setDetails}
         
         allErrors={allErrors}             // JOI all errors
         nameError={nameError}
         emailError={emailError}
         phoneError={phoneError}
         detailsError={detailsError}       // JOI
         handleSubmit={handleSubmit}
      />

      {/*  Modal confirmation */}
      <ConfirmationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        message="Your appointment has been booked successfully!"
      />
    </div>
  );
};

export default AppointmentPage;
