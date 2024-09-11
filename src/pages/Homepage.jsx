import React, { useState } from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import About from "../components/About";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <About />
    </div>
  );
};

export default Homepage;
