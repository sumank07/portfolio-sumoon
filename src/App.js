import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import logo from "./assets/logo.png";
import photo from "./assets/photo.jpg";
import Skills from "./components/Skills";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBtn = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.backgroundColor = isDarkMode ? "black" : "white";
    document.body.style.color = isDarkMode ? "white" : "black";
  }, [isDarkMode]);

  return (
    <div>
      <Navbar logo={logo} toggleBtn={toggleBtn} isDarkMode={isDarkMode} />
      <Home photo={photo} />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
