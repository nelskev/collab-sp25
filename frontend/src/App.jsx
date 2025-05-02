import React, { useEffect } from 'react'
import { Routes,  Route} from 'react-router-dom';
import ProtectedRoute from './admin/components/ProtectedRoute.jsx';

// Components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx';
import MissionStatement from './components/MissionStatement.jsx'
import Appointments from './components/Appointments.jsx'
import Services from './components/Services.jsx'

import ContactPage from './pages/ContactPage.jsx'

import CollisionRepair from './pages/CollisionRepair.jsx';

// Pages
import AdminLoginPage from './admin/pages/AdminLoginPage.jsx';
import AdminHomePage from './admin/pages/AdminHomePage.jsx';
import AdminReviewsPage from './admin/pages/AdminReviewsPage.jsx';
import AdminAppointmentsPage from './admin/pages/AdminAppointmentsPage.jsx';
import FormDetails from './pages/Forms.jsx';
import './App.css';
import AppointmentsPage from './pages/AppointmentPage.jsx';
import LocationPage from './pages/LocationPage.jsx';
import CustPaintPage from './pages/CustPaintPage.jsx';
import PaintDetailsPage from './pages/PaintDetailsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import FourZeroFourPage from './pages/FourZeroFourPage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import ListReviewsPage from './pages/ListReviewsPage.jsx';


import { useLocation } from 'react-router-dom'

function App() {

  const loc = useLocation();

  useEffect(() => {
    document.title = "Scott's Auto Body"
  }, [loc]);

  return (
    <>
      <Routes>
        {/* Main root route */}
        <Route path="/" element={
          <>
           <Navbar />
            <MissionStatement />
            <Appointments />
            <Services />
            <Footer />
          </>
        }/>
        {/* Route for Leaving a review */}
        <Route path="/leave_review" element={
          <>
            <Navbar />
            <ReviewsPage />
            <Footer />
          </>
        }/>
        {/* Route for viewing list of reviews */}
        <Route path="/list_reviews" element={
          <>
            <Navbar />
            <ListReviewsPage />
            <Footer />
          </>
        }/>

        <Route path="/contact" element={
          <>
            <Navbar />
            <ContactPage />
            <Footer />
          </>
        }/>

          <Route path="/forms" element={
          <>
               <Navbar />
            <FormDetails />
            <Footer />
          </>
        }/>
        <Route path="/collision-repair" element={
          <>
            <Navbar />
          <CollisionRepair />
            <Footer />
          </>
        }/>
       
       


        <Route path="/CustPaintPage" element={
          <>
            <Navbar /> 
            <CustPaintPage />
            <Footer />
          </>
            
        }/>

        <Route path="/PaintDetailsPage" element={
          <>
            <Navbar /> 
            <PaintDetailsPage />
            <Footer />
          </>
            
        }/>

          
        <Route path='/appointment' element={
          <>
        <Navbar /> 
          <AppointmentsPage />
          <Footer />
          </>
        } />
        <Route path='/location' element={
          <>
         <Navbar /> 
          <LocationPage />
          <Footer />
          </>
        } />
        <Route path='/AboutPage' element={
          <>
          <Navbar />
          <AboutPage />
          <Footer />
          </>
        } />
       


        <Route path='/adminlogin' element={
          
          <>
          <Navbar />
          <AdminLoginPage />
          </>
          } />
        <Route path="/admin" element={
          <ProtectedRoute>
          <AdminHomePage />
          <Footer/>
          </ProtectedRoute>
          } />
        <Route path='/adminreviews' element={
          
          <ProtectedRoute>
          <AdminReviewsPage /> 
          <Footer/>
          </ProtectedRoute> } />
        <Route path="/adminappointments" element={
          <ProtectedRoute>
          <AdminAppointmentsPage />
          <Footer/>
          </ProtectedRoute>
          } />
        <Route path='*' element={<FourZeroFourPage />} />
        
      </Routes>  
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

