import React from "react";

const Home = ({ photo }) => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gray-200"
    >
      <div className="text-center flex flex-col md:space-x-12">
        <img
          src={photo}
          alt=""
          className="rounded-full  mx-auto  w-72 h-72  object-cover mb-8 transform 
        transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Welcome to My Portfolio
        </h1>
        <p className="text-gray-800 text-base sm:text-lg md:text-xl">
          {" "}
          I am <strong>Suman Katuwal</strong> from Sankhuwasabha.
        </p>
      </div>
    </section>
  );
};

export default Home;
