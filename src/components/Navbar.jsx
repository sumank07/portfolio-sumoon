import React, { useState } from "react";

const Navbar = ({ logo }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-400 p-2 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-16 w-16" />

        <img src={logo} alt="Logo" className="h-16 w-16" />

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-gray-800 focus:outline-none text-2xl"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        <ul
          className={`absolute sm:static top-16 left-0 w-full sm:w-auto bg-gray-400 sm:bg-transparent sm:flex flex-col sm:flex-row sm:space-x-6 transition-all duration-300 ease-in-out ${
            open ? "block" : "hidden"
          }`}
        >
          <li className="py-2 sm:py-0">
            <a
              href="#home"
              className="block text-gray-800 hover:text-gray-600 px-4 transition-colors"
            >
              Home
            </a>
          </li>
          <li className="py-2 sm:py-0">
            <a
              href="#about"
              className="block text-gray-800 hover:text-gray-600 px-4 transition-colors"
            >
              About
            </a>
          </li>
          <li className="py-2 sm:py-0">
            <a
              href="#skills"
              className="block text-gray-800 hover:text-gray-600 px-4 transition-colors"
            >
              Skills
            </a>
          </li>
          <li className="py-2 sm:py-0">
            <a
              href="#contact"
              className="block text-gray-800 hover:text-gray-600 px-4 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
