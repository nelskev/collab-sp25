import React, { useEffect, useState } from "react";
import AppointmentForm from "../admin/components/AppointmentForm";
import ConfirmationModal from "../components/ConfirmationModal";

const AppointmentPage = () => {
  
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [details, setDetails] = useState('')
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    document.title = 'Appointment'
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
