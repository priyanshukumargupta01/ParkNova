import React from "react";
import HomeImage from "../assets/Hero.png";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen text-white overflow-hidden"
    >
      <div className="px-6 md:px-10 lg:px-16 pt-28 flex flex-col-reverse lg:flex-row md:flex-row items-center justify-between gap-12">

        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>

            <p className="text-sm md:text-[12px] text-blue-200">
              Smart Parking, Hassle Free
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Find Parking.
            <br />
            Anytime, Anywhere.
            <br />
            <span className="text-blue-500">Stress Free.</span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base mt-5 max-w-xl leading-7 mx-auto lg:mx-0">
            ParkNova helps you find the best parking spots near you.
            Save time, fuel and enjoy a seamless parking experience.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">

            <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-6 py-4 rounded-2xl shadow-lg shadow-blue-600/30 font-medium">
              Find Parking Now →
            </button>

            <button className="border border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 px-6 py-4 rounded-2xl font-medium">
              How It Works
            </button>
          </div>

        </div>
        <div className="flex-1 hidden relative lg:flex justify-center items-center">
          <div className="absolute w-350px h-350px md:w-500px md:h-500px bg-blue-600/20 blur-[120px] rounded-full"></div>
          <img
            src={HomeImage}
            alt="Hero"
            className="relative z-10 w-full max-w-650px drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;