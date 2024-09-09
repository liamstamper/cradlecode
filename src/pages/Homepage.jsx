import React, { useState } from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Header from "../components/Header";
import SignInModal from "../components/auth/SignInModal";
import RegisterModal from "../components/auth/RegisterModal";

const Homepage = () => {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  // Handlers for Sign In modal
  const openSignInModal = () => setSignInModalOpen(true);
  const closeSignInModal = () => setSignInModalOpen(false);

  // Handlers for Register modal
  const openRegisterModal = () => setRegisterModalOpen(true);
  const closeRegisterModal = () => setRegisterModalOpen(false);

  return (
    <div className="min-h-screen dark:bg-black">
      {/* Header with the sign-in and register buttons */}
      <Header
        onSignInClick={openSignInModal}
        onRegisterClick={openRegisterModal}
      />

      <Hero />
      <Features />
      <About />

      {/* Sign In Modal */}
      <SignInModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />

      {/* Register Modal */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
      />
    </div>
  );
};

export default Homepage;
