import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import PracticePage from "./pages/PracticePage";
import CoursesPage from "./pages/CoursesPage";
import Header from "./components/Header";
import SignInModal from "./components/auth/SignInModal";
import RegisterModal from "./components/auth/RegisterModal";
import Footer from "./components/Footer";

// Move useLocation inside a component wrapped by Router
function AppContent() {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  // Handlers for Sign In modal
  const openSignInModal = () => setSignInModalOpen(true);
  const closeSignInModal = () => setSignInModalOpen(false);

  // Handlers for Register modal
  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/gettingstarted") {
      setRegisterModalOpen(false);
    }
  }, [location]);

  return (
    <div className="dark:bg-black">
      <Header
        onSignInClick={openSignInModal}
        onRegisterClick={openRegisterModal}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route
          path="/gettingstarted"
          element={<PracticePage onRegisterClick={openRegisterModal} />}
        />
      </Routes>
      <SignInModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
      />
      <Footer />
    </div>
  );
}

// Wrap AppContent inside Router
export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
