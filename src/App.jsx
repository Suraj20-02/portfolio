import React from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

import SocialMedia from "./components/SocialMedia";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default App;
