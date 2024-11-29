import React from "react";
import AboutImage from "../assets/About-Image.jpg";
const About = () => {
  return (
    <section id="about" className="py-20 bg-blue-400">
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
              I am a passionate full-stack developer focused on building modern
              and responsive web applications. With a solid foundation in
              frontend technologies like React, HTML, and CSS, along with
              backend expertise, I strive to create seamless, efficient user
              experiences. I leverage Git for version control to ensure
              collaboration and maintain clean, organized code throughout
              development.
              </h3>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
