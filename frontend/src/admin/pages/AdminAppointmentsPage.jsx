import { useEffect, useState } from 'react'
import formatDate from '/helpers/dateAndTimeConversion'
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
  // eslint-disable-next-line no-unused-vars
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

      <div className="cards-wrapper">
        {appointments.map((appointment) => (
          <div key={appointment._id} className="card d-flex flex-column flex-lg-row align-items-lg-center justify-content-lg-around gap-1 gap-lg-3 p-2 p-lg-1">
            <div className="col-12 col-lg-1">{formatDate(appointment.date)}</div>
            <div className="col-12 col-lg-1">{appointment.time}</div>
            <div className="col-12 col-lg-2">{appointment.name}</div>
            {/* <div className="col-12 col-lg-2">{appointment.email}</div>
            <div className="col-12 col-lg-1">{appointment.phone}</div> */}
            {/* <div className="col-12 col-lg-auto">{appointment.details}</div> */}
            <button className='btn btn-primary'>Details / Modal Btn</button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default AdminAppointmentsPage