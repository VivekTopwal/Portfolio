import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      {/*<div className="pt-20 text-center text-2xl text-gray-700">Welcome to My Portfolio</div>*/}
      <Navbar />
      <Hero />
      <About />
      <Projects />

      <Skills />
<Contact />
<Footer />
  
     
     
    </div>
  );
}

export default App;
