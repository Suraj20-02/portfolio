import React from "react";
import { FaStar } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const About = () => {
  return (
    <div>
      {" "}
      <section id="about" className="py-20 bg-slate-200">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <div className="flex flex-row justify-center   mt-2 mb-2 ">
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
          <p className="text-gray-700 max-w-2xl mx-auto">
            Recent Computer Engineering graduate passionate about Artificial
            Intelligence and Machine Learning. Eager to contribute to innovative
            projects and develop cutting-edge AI solutions. A web developer with
            expertise in modern technologies like React, Tailwind CSS, and more.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
