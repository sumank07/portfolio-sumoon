import React from "react";

const Home = ({ photo }) => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-white-300"
    >
      <div className="text-center flex flex-col md:space-x-12">
        <img
          src={photo}
          alt=""
          className="rounded-full  mx-auto  w-72 h-72  object-cover mb-8 transform 
        transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-black-800 text-base sm:text-lg md:text-xl">
        I am <strong>Suman Katuwal</strong> from Sankhuwasabha.
        </h1>
      </div>
    </section>
  );
};

export default Home;
