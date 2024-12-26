import React from "react";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer className="bg-gray-900  text-gray-400 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Suraj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
