import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white-300">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          <div className="bg-pink-400 flex flex-col items-center border-2 border-gray-400 p-6 transition-all duration-300 hover:scale-105 rounded-lg">
            <FaHtml5 className="text-6xl text-orange-600" aria-label="HTML5" />
            <p className="mt-4 text-lg font-medium">HTML</p>
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-orange-600 text-white rounded mt-4 px-4 py-2 hover:bg-orange-700"
            >
              Read More
            </a>
          </div>
          <div className="bg-blue-400 flex flex-col items-center border-2 border-gray-400 p-6 transition-all duration-300 hover:scale-105 rounded-lg">
            <FaCss3Alt className="text-6xl text-blue-600" aria-label="CSS3" />
            <p className="mt-4 text-lg font-medium">CSS</p>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-blue-600 text-white rounded mt-4 px-4 py-2 hover:bg-blue-700"
            >
              Read More
            </a>
          </div>
          <div className="bg-red-400 flex flex-col items-center border-2 border-gray-400 p-6 transition-all duration-300 hover:scale-105 rounded-lg">
            <FaReact className="text-6xl text-blue-400" aria-label="React" />
            <p className="mt-4 text-lg font-medium">React</p>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-blue-400 text-white rounded mt-4 px-4 py-2 hover:bg-blue-500"
            >
              Read More
            </a>
          </div>
          <div className="bg-gray-400 flex flex-col items-center border-2 border-gray-400 p-6 transition-all duration-300 hover:scale-105 rounded-lg">
            <FaGitAlt className="text-6xl text-orange-500" aria-label="Git" />
            <p className="mt-4 text-lg font-medium">Git</p>
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-orange-500 text-white rounded mt-4 px-4 py-2 hover:bg-orange-600"
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
