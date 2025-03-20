//import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import MissionStatement from './components/MissionStatement.jsx'
import Appointments from './components/Appointments.jsx'
import Services from './components/Services.jsx'
import AdminHomePage from './admin/pages/AdminHomePage.jsx';


function App() {
  return (
      <>
      <Routes>
        {/* Render your main content components here for the root path */}
        <Route path="/" element={
          <>
            <Navbar />
            <MissionStatement />
            <Appointments />
            <Services />
          </>
        }/>
        <Route path="/admin" element={<AdminHomePage />} />
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


