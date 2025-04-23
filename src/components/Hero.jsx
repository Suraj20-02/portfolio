import React from "react";
import me from "../assets/image.png";
import { FaStar } from "react-icons/fa6";
import { TfiLayoutLineSolid } from "react-icons/tfi";
const Hero = () => {
  return (
    <div>
      <section
        className="bg-[#1abc9c] text-white mt-24 text-center relative"
        style={{ height: "calc(100vh - 96px)" }}
      >
        <div className="container mx-auto flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
          <img
            src={me}
            className="h-56 rounded-full shadow-lg shadow-slate-950 mt-16 sm:h-64 md:h-72 lg:h-80"
            alt="Suraj"
          />{" "}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-5 mb-4">
            Hi, I'm Suraj
          </h2>
          <div className="flex flex-row mt-2 mb-2 ">
            <TfiLayoutLineSolid className="text-4xl" />{" "}
            <TfiLayoutLineSolid className="text-4xl" />{" "}
            <TfiLayoutLineSolid className="text-4xl" />{" "}
            <TfiLayoutLineSolid className="text-4xl" />
            <FaStar className="text-4xl" />
            <TfiLayoutLineSolid className="text-4xl" />{" "}
            <TfiLayoutLineSolid className="text-4xl" />{" "}
            <TfiLayoutLineSolid className="text-4xl" />{" "}
            <TfiLayoutLineSolid className="text-4xl" />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl mb-6">
            Computer Engineer from Nepal
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
