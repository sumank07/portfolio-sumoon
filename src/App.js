import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import logo from "./assets/logo.png"; 
import photo from "./assets/photo.jpg"; 
import Skills from "./components/Skills";


function App() {
  return (
    <div>
      <Navbar logo={logo} />
      <Home photo={photo} />
      <About />
      <Skills />
      <Contact /> 
      <Footer />    
    </div>
  );
}

export default App;
