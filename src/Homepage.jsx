import Features from "./components/Features";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";

const Homepage = () => {
  return (
    <div className="min-h-screen dark:bg-black">
      <Hero />
      <Features />
      <About />
    </div>
  );
};

export default Homepage;
