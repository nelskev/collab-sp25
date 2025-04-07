import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import MissionStatement from './components/MissionStatement.jsx';
import Appointments from './components/Appointments.jsx';
import Services from './components/Services.jsx';
import AdminHomePage from './admin/pages/AdminHomePage.jsx';
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

        {/* Route for ReviewsPage */}
        <Route path="/leave_review" element={<ReviewsPage />} />

        {/* Route for ListReviewsPage */}
        <Route path="/list_reviews" element={<ListReviewsPage />} />

        {/* Admin route */}
        <Route path="/admin" element={<AdminHomePage />} />
      </Routes>
    </>
  );
}

export default App;
