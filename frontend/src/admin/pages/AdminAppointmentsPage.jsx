import { useEffect, useState } from 'react'
import formatTimezone from '/helpers/convertTimezoneDate'
import AdminNavbar from '../components/AdminNavbar'
import CreateAppointmentForm from '../components/CreateAppointmentForm'
import EditAppointmentForm from '../components/EditAppointmentForm'
import SearchAppointment from '../components/SearchAppointment'
import TodaysAppointments from '../components/TodaysAppointments'
import SpecificDateAppointments from '../components/SpecificDateAppointments'
import PrintAppointments from '../components/PrintAppointments'

// JOI
import userFrontendSchema from '../validation/appointmentFormValidation'



function AdminAppointmentsPage() {

  // state for each component (CreeateAppt/EditAppt) to keep it's own date/time separate
  const [createDateTime, setCreateDateTime] = useState(null)
  const [editDateTime, setEditDateTime] = useState(null)
  // DOMContentLoaded React similar
  const [showPageLoadAppointments, setShowPageLoadAppointments] = useState(false)
  const [todaysAppointments, setTodaysAppointments] = useState([]); 
  // for sorting
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchEmail, setSearchEmail] = useState('');
  const [isSortActive, setIsSortActive] = useState(false)

  // Appt Creation success banner
  const [showApptCreationBanner, setShowApptCreationBanner] = useState(false);

  // Update modal
  const [showModal, setShowModal] = useState(false); 
  // Update Banner
  const [showUpdateBanner, setShowUpdateBanner] = useState(false); 

  // Delete modal
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  // Delete Banner
  const [showDeleteBanner, setShowDeleteBanner] = useState(false); 

  const [nameToDelete, setNameToDelete] = useState('')  
  const [idToDelete, setIdToDelete] = useState(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [details, setDetails] = useState('')
  const [appointments, setAppointments] = useState([]) 
  const [selectedAppointment, setSelectedAppointment] = useState(null) // for modal
  const [updateName, setUpdateName] = useState('')
  const [updateEmail, setUpdateEmail] = useState('')
  const [updatePhone, setUpdatePhone] = useState('')
  const [updateDetails, setUpdateDetails] = useState('')
  // JOI
  const [nameError, setNameError] = useState(null)   
  const [emailError, setEmailError] = useState(null)
  const [phoneError, setPhoneError] = useState(null)
  const [detailsError, setDetailsError] = useState(null)
  const [allErrors, setAllErrors] = useState([])
  
  const dailyTimeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"] 

  
  // DOMContentLoaded similar: to show todays appointments list - only onload and disappear after user search
  const showTodays = showPageLoadAppointments && !selectedDate && searchEmail === ''

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

      //Set showPageLoadAppointments to true!
      setShowPageLoadAppointments(true)

      const today = new Date().toISOString().split("T")[0]

      const result = data.filter(appt => {
        const apptDate = new Date(appt.date).toISOString().split("T")[0]
        return apptDate === today;
      })
  
      setTodaysAppointments(result)

    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    document.title = 'Admin Appointments'
    fetchData()
  }, [])            // useEffect only handles the initial data load (runs once), which is our state array
  

  const handleAppointmentCreated = () => {
    fetchData()     // add new appointment and re-render
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!createDateTime) {
      console.error('Please select a date and time.')
      return
    }
    
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
    
    const { date, time } = formatTimezone(createDateTime)
    console.log(date, time, name)
    try {
      const response = await fetch('http://localhost:8000/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date,
          time,
          name,
          email,
          phone,
          details,
        }),
      })

      const result = await response.json()
      console.log('Server response:', result)

      if (response.ok) {
        setShowApptCreationBanner(true)   // alert
        setTimeout(() => setShowApptCreationBanner(false), 8000)

        console.log('Appointment created successfully')
        handleAppointmentCreated()   // call method to add new appointment if successful

        // Clear all fields/inputs if successful
        setCreateDateTime(null) 
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

  // UPDATE USER
  const handleUpdateAppointment = async (e) => {
    e.preventDefault()
    console.log("Update user button clicked", selectedAppointment)

    // Clear Joi  
    // (Yes, I am not writing DRY code and am repeating this JOI functionality, but only since a helper function would be not so clear for us newbies)
    setNameError('')
    setEmailError('')
    setPhoneError('')
    setDetailsError('')
    setAllErrors([])
    
    // Use Joi to validate the data
    const validationResult = userFrontendSchema.validate({ name: updateName, email: updateEmail, phone: updatePhone, details: updateDetails },
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
        
          // const messages = errors.map(error => error.message);
          // setAllErrors(messages);
  
          return;
      }

    setShowModal(true)  // modal  
    
    setShowUpdateBanner(true)   // alert
    setTimeout(() => setShowUpdateBanner(false), 8000)
  
  }

    const confirmUpdateUser = async () => {

    const { date, time } = formatTimezone(editDateTime)

    try {
      const response = await fetch(`http://localhost:8000/appointments/${selectedAppointment._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', },
          body: JSON.stringify({ 
          name: updateName, 
          email: updateEmail, 
          phone: updatePhone, 
          details: updateDetails,
          date,
          time,
        }),
      })
      console.log(response)
      if (response.ok) {
        fetchData()
        setSelectedAppointment(null)
        setShowModal(false) // modal
      } else {
        console.error('Failed to update user')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  // DELETE USER
   const handleDeleteAppointment = async (id, name) => {
    setShowDeleteModal(true)  // modal  
    setNameToDelete(name)
    setIdToDelete(id)
    console.log(id, name)
  }

  const confirmDeleteUser  = async (idToDelete) => {
    console.log(idToDelete)
    try {
      const response = await fetch(`http://localhost:8000/appointments/${idToDelete}`, {
        method: 'DELETE',
      })
  
      if (response.ok) {
        console.log('Appointment deleted successfully')
        fetchData() // refresh the list

        setShowDeleteModal(false)  // delete modal

        setShowDeleteBanner(true)   // alert
        setTimeout(() => setShowDeleteBanner(false), 8000)

      } else {
        console.error('Failed to delete appointment')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }


  // BOOK APPOINTMENT - BUTTON CLICK HANDLER
  const handleBookAppointment = async (id, name) => {
    setShowDeleteModal(true)  // modal  
    setNameToDelete(name)
    setIdToDelete(id)
    console.log(id, name)
  }



  // SORT APPOINTMENTS BY DATE - CALENDAR LOGIC
  let filteredAppointments;

  if (selectedDate) {
    filteredAppointments = appointments.filter((appt) => {
      const apptDate = new Date(appt.date).toISOString().split('T')[0];
      return apptDate === selectedDate;
    });
  } else {
    filteredAppointments = appointments;
  }

  // SEARCH APPOINTMENTS BY EMAIL
  const handleSearchedAppointments = filteredAppointments.filter((appt) =>
    searchEmail === '' || appt.email.toLowerCase().includes(searchEmail.toLowerCase())
  );

  // SORT TOGGLING FOR DISPLAY
  const toggleSorting = () => {
    setIsSortActive(!isSortActive)
  };

   //FORMATS DATE & TIME SLOT FOR APPOINTMENT FORM
  const handleCreateDateTime = (date, timeSlot) => {
    const dateString = date || new Date().toISOString().split('T')[0];
    const [hours, minutes] = timeSlot.split(':');
    const dateTime = new Date(dateString);
    dateTime.setHours(hours);
    dateTime.setMinutes(minutes);
    setCreateDateTime(dateTime);
  };
  return (

    <>
    <AdminNavbar />
    
    <div className="container d-flex flex-column gap-0 gap-lg-2 py-2 p-lg-3 my-2 my-lg-4">
      <h1 className="text-center fs-3 m-0 mt-1 section-header-blue">Appointment page</h1>

        {/* Print Button */}
        {selectedDate && !isNaN(new Date(selectedDate)) && (
          <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
            <PrintAppointments 
              appointments={filteredAppointments} 
              selectedDate={new Date(selectedDate)} 
            />
          </div>
        )}


      {showApptCreationBanner && (
        <div className="alert alert-success col-11 col-md-9 col-lg-6 col-xl-5 mx-auto mt-3 text-center" role="alert">
          Appointment created!
          {/* Appointment for {name} created! */}
        </div>
      )}

      {showUpdateBanner && (
        <div className="alert alert-success col-11 col-md-9 col-lg-6 col-xl-5 mx-auto mt-3 text-center" role="alert">
          Appointment updated!
        </div>
      )}

      {showDeleteBanner && (
        <div className="alert alert-danger col-11 col-md-9 col-lg-6 col-xl-5 mx-auto mt-3 text-center" role="alert">
          Appointment deleted!
        </div>
      )}

      {/* UPDATE APPOINTMENT Confirmation Modal */}
      {showModal && (
        <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} aria-modal="true" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm Update</h1>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Are you sure you want to update {updateName}?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={confirmUpdateUser}>Confirm</button> 
              </div>
            </div>
          </div>
        </div>
      )}


      {/* DELETE APPOINTMENT Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal fade show" id="delete-Modal" tabIndex="-1" aria-labelledby="delete-ModalLabel" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} aria-modal="true" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="delete-ModalLabel">Confirm Delete</h1>
                <button type="button" className="btn-close" onClick={() => setShowDeleteModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete {nameToDelete}?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Cancel</button>
                <button type="button" className="btn btn-primary" onClick={() => confirmDeleteUser(idToDelete)}>Confirm</button> 
              </div>
            </div>
          </div>
        </div>
      )}
 
      <div className='side-by-side-desktop d-flex flex-column align-items-xl-start justify-content-lg-center mx-auto gap-3'>

      {/* AppointmentForm gets called and uses our empty state variables we already initilized, and fills them with values */}
      
      <CreateAppointmentForm
        selectedDateTime={createDateTime}
        setSelectedDateTime={setCreateDateTime}
        appointments={appointments}  // grey out taken appointment
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
        detailsError={detailsError}

        handleSubmit={handleSubmit}
      />

      {/* DETAILS PANE */}
      {selectedAppointment && (
        <div className="m-0" id="details-pane-wrapper">
          <div
            className="w-100 details-pane p-1 p-lg-4 mt-3 mb-5 bg-white border border-2"
            id={`details-pane-${selectedAppointment._id}`}>
            {console.log("selectedAppointment:", selectedAppointment)}

            <EditAppointmentForm
              selectedDateTime={editDateTime}
              setSelectedDateTime={setEditDateTime}
              appointments={appointments}  // grey out taken appointment
              updateName={updateName}
              setUpdateName={setUpdateName}
              updateEmail={updateEmail}
              setUpdateEmail={setUpdateEmail}
              updatePhone={updatePhone}
              setUpdatePhone={setUpdatePhone}
              updateDetails={updateDetails}
              setUpdateDetails={setUpdateDetails}

              allErrors={allErrors}             // JOI all errors
              nameError={nameError}
              emailError={emailError}
              phoneError={phoneError}
              detailsError={detailsError}

              handleUpdateAppointment={handleUpdateAppointment}
              handleBookAppointment={handleBookAppointment}
              selectedAppointment={selectedAppointment} 
            />
          
          </div>
        </div>
      )} 

      </div>



      {/* Sorting by DATE or EMAIL */}
      <div className='sort-appointments-wrapper d-flex gap-0 m-0 mb-2 mb-lg-0 mx-auto p-0'>

        <div className='m-0 p-0 d-flex'>
          <input 
            className='m-0 sort-dates-input'
            type="date" 
            onChange={(e) => setSelectedDate(e.target.value)} 
            value={selectedDate || ''}
          />
        </div>

        <div className='sort-appointments-dropdown m-0 p-0 d-flex'>
          {/* <input type="text" placeholder="search email" className="py-1 ps-2" value={searchEmail} onChange={(e) => setSearchEmail(e.target.value)}/> */}
          <input 
            type="text" 
            placeholder="search email" 
            className="py-1 ps-2" 
            value={searchEmail}
            onChange={(e) => {
              const value = e.target.value;
              setSearchEmail(value);
              if (!isSortActive && value.trim() !== "") {
                toggleSorting();
              } else if (isSortActive && value.trim() === "") {
                toggleSorting(); // turn it off when field is cleared
              }
            }}
          />

        </div>

      </div>

       
      {/* ONLY RENDER UPON PAGE LOAD FOR CURRENT DATE */}
      
      {showTodays && (
        <div className='my-5'>
          <TodaysAppointments
            todaysAppointments={todaysAppointments} 
            dailyTimeSlots={dailyTimeSlots}
            setUpdateName={setUpdateName}
            setUpdateEmail={setUpdateEmail}
            setUpdatePhone={setUpdatePhone}
            setUpdateDetails={setUpdateDetails}
            setSelectedAppointment={setSelectedAppointment}
            handleDeleteAppointment={handleDeleteAppointment}
            setCreateDateTime={setCreateDateTime}
            handleCreateDateTime={handleCreateDateTime}
            handleBookAppointment={handleBookAppointment}
          />
       </div>
      )}
      

      {/* ONLY RENDER UPON EMAIL SEARCH RESULTS - CREATES APPOINTMENTS CARDS */}
      
      {isSortActive && (
        <div className='my-5'>
          <SearchAppointment
            appointments={handleSearchedAppointments} // use 'handleSearchedAppointments' filter above and pass results to child
            setUpdateName={setUpdateName}
            setUpdateEmail={setUpdateEmail}
            setUpdatePhone={setUpdatePhone}
            setUpdateDetails={setUpdateDetails}
            setSelectedAppointment={setSelectedAppointment}
            handleDeleteAppointment={handleDeleteAppointment}
            handleCreateDateTime={handleCreateDateTime}
           />
        </div>
      )}
     

      {/* ONLY RENDER UPON DATE SEARCH RESULTS - CREATES APPOINTMENTS CARDS */}
      {selectedDate && handleSearchedAppointments.length > 0 && (
        <div className='my-5'>
          <SpecificDateAppointments
            setUpdateName={setUpdateName}
            setUpdateEmail={setUpdateEmail}
            setUpdatePhone={setUpdatePhone}
            setUpdateDetails={setUpdateDetails}
            todaysAppointments={handleSearchedAppointments}
            setSelectedAppointment={setSelectedAppointment}
            dailyTimeSlots={dailyTimeSlots}
            handleDeleteAppointment={handleDeleteAppointment}
            handleBookAppointment={handleBookAppointment}  
            selectedDate={selectedDate}
            handleCreateDateTime={handleCreateDateTime}
          />
        </div>
      )}

  </div> {/* end container */}
  </>
  );
}

export default AdminAppointmentsPage
