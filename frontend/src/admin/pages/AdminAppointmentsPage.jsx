import { useEffect, useState } from 'react'
import formatDate from '/helpers/dateAndTimeConversion'
// import formatName from '/helpers/stringConversion'
import AdminNavbar from '../components/AdminNavbar'
import AppointmentForm from '../components/AppointmentForm'

/* This page in a nutshell:
   The button click hits handleSubmit(), then the POST tries and if successful it's 'response.ok' which 
   allows for the call to handleAppointmentCreated(), then fetchData GET's the new array */

/* The new appointment is not directly added to the appointments state in the handleSubmit or handleAppointmentCreated methods. 
   The appointments state is refreshed with the entire list of appointments on the GET fetch from the backend API */

function AdminAppointmentsPage() {

  // create and initialize empty state variables so we can call DatePickerUI and AppointmentForm and send them for filling with values
  const [selectedDateTime, setSelectedDateTime] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [details, setDetails] = useState('')
  const [appointments, setAppointments] = useState([]) 
  const [selectedAppointment, setSelectedAppointment] = useState(null) // for modal

  // gets the initial list of appointments, but also runs a second time after the POST request if it's successful
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/appointments')
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

  useEffect(() => {
    fetchData()
  }, [])      // useEffect only handles the initial data load (runs once), which is our state array

  const handleAppointmentCreated = () => {
    fetchData()     // add new appointment
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!selectedDateTime) {
      console.error('Please select a date and time.')
      return
    }

    const offset = selectedDateTime.getTimezoneOffset()
    const adjustedTime = new Date(selectedDateTime.getTime() - offset * 60 * 1000)

    try {
      const response = await fetch('http://localhost:8000/appointments', {
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

    <>
    <AdminNavbar />
    
    <div className="container d-flex flex-column bg-light border border-1 rounded-4 gap-0 gap-lg-2 py-2 p-lg-3 my-2 my-lg-4">
      <h1 className="text-center fs-3 m-0 mt-1">Appointment page</h1>

      {/* AppointmentForm gets called and uses our empty state variables we already initilized, and fills them with values*/}
      <AppointmentForm
        selectedDateTime={selectedDateTime}
        setSelectedDateTime={setSelectedDateTime}
        appointments={appointments}  // grey out taken appointment
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

      {/* DETAILS PANE */}
      {selectedAppointment && (
        <div
          className="w-100 details-pane p-1 p-lg-4 my-5 bg-white border border-2"
          id={`details-pane-${selectedAppointment._id}`}>

          <h3 className="fs-4 text-center mb-3">Selected Appointment</h3>

          <div className="details-information">

            <div className="col-12 d-flex justify-content-between">
              <span className="text-dark fw-semibold">{formatDate(selectedAppointment.date)}</span>
              <span className="text-success fw-semibold">{selectedAppointment.time}</span>
            </div>

            {/* {formatName(selectedAppointment.name)} */}
            <div className="col-12 col-lg-3">{selectedAppointment.name}</div>
            <div className="col-12 col-lg-3">{selectedAppointment.email}</div>
            <div className="col-12 col-lg-3">{selectedAppointment.phone}</div>
            <div className="col-12 col-lg-auto p-3">{selectedAppointment.details}</div>

          </div>

          <div className="details-button-container d-flex gap-3 p-3 gap-lg-4">
            <button className="w-50 btn btn-dark">Update</button>
            <button className="w-50 btn btn-primary">Save</button>
          </div>
        </div>
      )}

      {/* CARDS WRAPPER */}
      {appointments.map((appointment) => (
        <div className="cards-wrapper" key={appointment._id}>
          <div className="card rounded-0 d-flex flex-column gap-3 flex-lg-row justify-content-lg-around align-items-lg-center p-3 p-lg-1 m-0">
            <div className="col-12 col-lg-3">{formatDate(appointment.date)}</div>
            <div className="col-12 col-lg-3">{appointment.time}</div>

               {/* {formatName(selectedAppointment.name)} */}
            <div className="col-12 col-lg-3">{appointment.name}</div>

            <button type="button" className="btn btn-primary p-1"
              onClick={() => setSelectedAppointment(appointment)}>
              Details
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default AdminAppointmentsPage