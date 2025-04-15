import React from 'react'
import { Link } from 'react-router-dom';
import AppointmentPage from '../pages/AppointmentPage.jsx';

export default function Appointments() {
  return (
    <div class="section section-2 p-5" id="appointments">
        <div class="section-2-text d-flex flex-column gap-3 col-12 col-md-8 col-lg-6 col-xl-4 mx-auto">
            <h4 class="text-center">Schedule A Free Estimate Today</h4>
            <Link class="btn btn-dark fs-4" type="button" to="/appointmentPage">View Appointment Times</Link>
        </div>
    </div>
  )
}
