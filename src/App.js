import React, { useEffect } from "react";

// import components
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contributors from "./components/Contributors";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contributors />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
