import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import TutorialPage from "./pages/TutorialPage";
import CoursesPage from "./pages/CoursesPage";
import Header from "./components/Header";
import SignInModal from "./components/auth/SignInModal";
import RegisterModal from "./components/auth/RegisterModal";

export default function App() {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  // Handlers for Sign In modal
  const openSignInModal = () => setSignInModalOpen(true);
  const closeSignInModal = () => setSignInModalOpen(false);

  // Handlers for Register modal
  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);
  return (
    <Router>
      <div className="min-h-screen dark:bg-black">
        <Header
          onSignInClick={openSignInModal}
          onRegisterClick={openRegisterModal}
        />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/practice" element={<TutorialPage />} />
        </Routes>
        <SignInModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />
        <RegisterModal
          isOpen={isRegisterModalOpen}
          onClose={closeRegisterModal}
        />
      </div>
    </Router>
  );
}
