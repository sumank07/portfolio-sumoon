import React from "react";
import AboutImage from "../assets/About-Image.jpg";
const About = () => {
  return (
    <section id="about" className="py-20 bg-white-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0 "
          />
          <div className="flex-1">
            <p className="text-lg text-center mb-8">
              <h3>
              I am a passionate full-stack developer dedicated to creating
              modern, responsive web applications. With a strong foundation in
              both frontend and backend technologies, I strive to deliver
              seamless and efficient user experiences.
              </h3>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
