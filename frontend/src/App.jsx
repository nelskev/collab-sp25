import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import MissionStatement from './components/MissionStatement.jsx'
import Appointments from './components/Appointments.jsx'
import Services from './components/Services.jsx'
import ReviewsPage from './pages/ReviewsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

import Navbar from './components/Navbar.jsx';
import MissionStatement from './components/MissionStatement.jsx';
import Appointments from './components/Appointments.jsx';
import Services from './components/Services.jsx';
import AdminHomePage from './admin/pages/AdminHomePage.jsx';
import AdminAppointmentsPage from './admin/pages/AdminAppointmentsPage.jsx';

import ReviewsPage from './pages/ReviewsPage.jsx';
import ListReviewsPage from './pages/ListReviewsPage.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main root route */}
        <Route path="/" element={
          <>
            <MissionStatement />
            <Appointments />
            <Services />
          </>
        }/>
        <Route path="/list_reviews" element={
          <>
            <Navbar />
            <ListReviewsPages />
          </>
        }/>
        <Route path="/contact" element={
          <>
            <Navbar />
            <ContactPage />
          </>
        }/>
       
       


        <Route path="/admin" element={<AdminHomePage />} />
        <Route path="/adminappointments" element={<AdminAppointmentsPage />} />
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

