import React from 'react'
import { Routes,  Route} from 'react-router-dom';

// Components
import Navbar from './components/Navbar.jsx'
import MissionStatement from './components/MissionStatement.jsx'
import Appointments from './components/Appointments.jsx'
import Services from './components/Services.jsx'

// Pages
import AdminHomePage from './admin/pages/AdminHomePage.jsx';
import AdminReviewsPage from './admin/pages/AdminReviewsPage.jsx';
import AdminAppointmentsPage from './admin/pages/AdminAppointmentsPage.jsx';
import AppointmentsPage from './pages/AppointmentPage.jsx';
import LocationPage from './pages/LocationPage.jsx';
import CustPaintPage from './pages/CustPaintPage.jsx';
import PaintDetailsPage from './pages/PaintDetailsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import FourZeroFourPage from './pages/FourZeroFourPage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import ListReviewsPage from './pages/ListReviewsPage.jsx';
import ContactPage from './pages/ContactPage.jsx'


function App() {
  return (
    <>     
        <Navbar />
        <Routes>
          <Route path="/" element={<> <MissionStatement /> <Appointments /> <Services /> </>} />          
          <Route path='/leave_review' element={<ReviewsPage />} />
          <Route path='/list_reviews' element={<ListReviewsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/custPaintPage' element={<CustPaintPage />} />
          <Route path='/paintDetailsPage' element={<PaintDetailsPage />} />
          <Route path='/appointments' element={<AppointmentsPage />} />
          <Route path='/location' element={<LocationPage />} />
          <Route path='/aboutPage' element={<AboutPage />} />
          <Route path='/admin' element={<AdminHomePage />} />
          <Route path='/adminreviews' element={<AdminReviewsPage />} />
          <Route path='/adminappointments' element={<AdminAppointmentsPage />} />
          <Route path='*' element={<FourZeroFourPage />} />
        </Routes>    
        {/* Add you Footer component here  */}      
    </>
  )
}
export default App


//<>
//<Navbar />
//<MissionStatement />
//<Appointments />
//<Services />
//</>  

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// <Router>
// <>
//   <Navbar />
//   <MissionStatement />
//   <Appointments />
//   <Services />
//   <Routes>
//     <Route path="/admin" element={<AdminHomePage />} />
//   </Routes>
// </>
// </Router>

