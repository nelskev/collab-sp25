import { useEffect, useState } from 'react'
import AdminNavbar from '../components/AdminNavbar'

import { Link } from "react-router-dom";
import { authenticatedFetch } from '../authentication/authenticatedFetch'


export default function AdminHomePage() {

  const [displayAppointments, setDisplayAppointments] = useState([]) 

  // gets the initial list of appointments, but also runs a second time after the POST request if it's successful
  const fetchData = async () => {
    try {
      const response = await authenticatedFetch('/appointments')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      // setAppointments(data)
      // console.log('Server response:', data)

      const today = new Date().toISOString().split("T")[0]
      console.log(`Today is: ${today}`)

      const result = data.filter(appt => {
        const apptDate = new Date(appt.date).toISOString().split("T")[0]
        console.log(`The result is: ${apptDate}`)
        return apptDate === today;
      })
      
      console.log(result)
      setDisplayAppointments(result)

    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])            // useEffect only handles the initial data load (runs once), which is our state array

  return (
    <>
      <AdminNavbar />

      {/* <div className='my-5 main-minimum-vertical-space'>
        <h1 class="alert alert-primary col-11 col-lg-8 mx-auto text-center fs-3" role="alert">
            Admin Home Page
        </h1>
      </div> */}

      <div className='admin-home-container container mx-auto my-5'>
      <h1 className="text-center fs-3 m-0 mb-5 section-header-blue">Admin home</h1>
      {(
        ()=> {
          if(displayAppointments.length > 1){
            return(
              <Link to="/adminappointments" className="m-0 text-decoration-none">
                <h3 class="alert-absolute-center alert alert-success col-11 col-lg-8 col-xl-5 text-center fs-3 p-5 " role="alert">
                  There are {displayAppointments.length} appointments for today
                </h3>
              </Link>
            )  
          }
          else if(displayAppointments.length > 0){
            return(
              <Link to="/adminappointments" className="m-0 text-decoration-none">
                <h3 class="alert-absolute-center alert alert-success col-11 col-lg-8 col-xl-5 text-center fs-3 p-5 " role="alert">
                  There is {displayAppointments.length} appointment for today
                </h3>
              </Link>
            )  
          }
          else{
            return(
              <Link to="/adminappointments" className="m-0 text-decoration-none">
                <h3 class="alert-absolute-center alert alert-danger col-11 col-lg-8 col-xl-5 text-center fs-3 p-5 " role="alert">
                  There are {displayAppointments.length} appointments for today
                </h3>
              </Link>
            )  
          }
        }
      )()}
      </div>

    </>
  )
}  