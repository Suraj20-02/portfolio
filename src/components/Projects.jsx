import React from "react";
import emotions from "../assets/emotions.png";
import movies from "../assets/movies.png";
import sentiment from "../assets/sentiment.png";

const Projects = () => {
  return (
    <div>
      <section id="projects" className="bg-[#1abc9c] py-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10  ">
            {/* Project Card */}
            <div className="bg-slate-200 ml-2  shadow-lg rounded overflow-hidden">
              <img
                src={emotions}
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">
                  MultiModal Emotion Detection
                </h4>
                <p className="text-gray-700 mb-4">
                  This is a ML project which helps us to detect the emotion of a
                  person by analyzing their facial expression and written text.
                </p>
                <a
                  className="text-blue-500 hover:underline"
                  href="https://github.com/Suraj20-02/multimodal-emotion-detection-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
            <div className="bg-slate-200 ml-2  shadow-lg rounded overflow-hidden">
              <img
                src={movies}
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">
                  Movie Recommendation System
                </h4>
                <p className="text-gray-700 mb-4">
                  This system recommend movies of the type that you searching
                  for .
                </p>
                <a
                  className="text-blue-500 hover:underline"
                  href="https://github.com/Suraj20-02/movie-recommendation-system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
            <div className="bg-slate-200 ml-2  shadow-lg rounded overflow-hidden">
              <img
                src={sentiment}
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">
                  Text Sentiment Analysis
                </h4>
                <p className="text-gray-700 mb-4">
                  A ML project which helps us to detect the emotion of a user by
                  analyzing their written text.
                </p>
                <a
                  className="text-blue-500 hover:underline"
                  href="https://github.com/Suraj20-02/text-sentiment-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </a>
              </div>
            </div>
            <div className="bg-[#1abc9c] ml-2  shadow-2xl rounded overflow-hidden">
              <div className="p-6">
                <h4 className="text-xl pt-36 text-gray-300 mb-2">
                  More to come ...
                </h4>
                <p className="text-gray-700 mb-4"></p>
                <a className="text-blue-500 hover:underline"></a>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
