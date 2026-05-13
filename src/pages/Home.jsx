import React from "react";
import HomeImage from "../assets/Hero.png";
import { Search, ShieldCheck, Wallet, Clock3, CalendarDays } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-[#020817] text-white overflow-hidden"
    > 
      <div className="max-w-1400px mx-auto px-6 lg:px-12 pt-28 flex flex-col lg:flex-row items-center justify-between gap-16">
 
        <div className="flex-1">
 
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <p className="text-sm text-blue-200">
              Smart Parking, Hassle Free
            </p>
          </div>
 
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Find Parking.
            <br />
            Anytime, Anywhere.
            <br />
            <span className="text-blue-500">Stress Free.</span>
          </h1>
 
          <p className="text-gray-400 text-lg mt-8 max-w-600px leading-8">
            ParkNova helps you find the best parking spots near you.
            Save time, fuel and enjoy a seamless parking experience.
          </p>
 
          <div className="flex flex-wrap items-center gap-5 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-blue-600/30">
              Find Parking Now →
            </button>

            <button className="border border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-lg">
              How It Works
            </button>

          </div>

          
        </div>
 
        <div className="flex-1 relative flex justify-center items-center">
 
          <div className="absolute w-500px h-500px bg-blue-600/20 blur-[120px] rounded-full"></div>
 
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