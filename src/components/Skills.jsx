import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-green-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
      
          <div className="bg-pink-400 flex flex-col items-center border-2 border-gray-400 p-6 transition-all duration-300 hover:scale-105 rounded-lg">
            <FaHtml5 className="text-6xl text-orange-600" aria-label="HTML5" />
            <p className="mt-4 text-lg font-medium">HTML</p>
            <p className="text-sm text-center mt-2">
              HTML is the standard language used to create and structure content on the web. It defines the structure of web pages using elements like headings, paragraphs, links, images, and more.
            </p>
            <a
              href="https://www.w3schools.com/html/"
              className="btn btn-primary bg-orange-600 text-white rounded mt-4 px-4 py-2 hover:bg-orange-700"
            >
              Read More
            </a>
          </div>

         
          <div className="bg-green-400 flex flex-col items-center border-2 border-gray-400 p-6 transition-all duration-300 hover:scale-105 rounded-lg">
            <FaCss3Alt className="text-6xl text-blue-600" aria-label="CSS3" />
            <p className="mt-4 text-lg font-medium">CSS</p>
            <p className="text-sm text-center mt-2">
              CSS is used for styling HTML elements on a web page. It controls the layout, colors, fonts, and overall design of the page, making it responsive and attractive.
            </p>
            <a
              href="https://www.w3schools.com/css/"
              className="btn btn-primary bg-blue-600 text-white rounded mt-4 px-4 py-2 hover:bg-blue-700"
            >
              Read More
            </a>
          </div>

         
          <div className="bg-red-400 flex flex-col items-center border-2 border-gray-400 p-6 transition-all duration-300 hover:scale-105 rounded-lg">
            <FaReact className="text-6xl text-blue-400" aria-label="React" />
            <p className="mt-4 text-lg font-medium">React</p>
            <p className="text-sm text-center mt-2">
              React is a JavaScript library for building user interfaces, particularly single-page applications (SPAs). It enables the creation of reusable UI components and manages the view layer.
            </p>
            <a
              href="https://react.dev/"
              className="btn btn-primary bg-blue-400 text-white rounded mt-4 px-4 py-2 hover:bg-blue-500"
            >
              Read More
            </a>
          </div>

         
          <div className="bg-gray-400 flex flex-col items-center border-2 border-gray-400 p-6 transition-all duration-300 hover:scale-105 rounded-lg">
            <FaGitAlt className="text-6xl text-orange-500" aria-label="Git" />
            <p className="mt-4 text-lg font-medium">Git</p>
            <p className="text-sm text-center mt-2">
              Git is a version control system that tracks changes to files and allows multiple developers to collaborate on projects. It manages code versions and facilitates branching and merging.
            </p>
            <a
              href="https://git-scm.com/"
              className="btn btn-primary bg-orange-500 text-white rounded mt-4 px-4 py-2 hover:bg-orange-600"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;