import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_a8bt8gs", // Replace with your service ID
        "template_2al2jjp", // Replace with your template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        "46VVzLZjsq7j8yU6t" // Replace with your public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage(
            "Thank you for your message! I will get back to you soon."
          );
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <section id="contact" className="py-20 bg-slate-200 ">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
          <p className="text-gray-800 mb-6">
            I'd love to hear from you. Feel free to reach out!
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-gray-200 text-gray-800 shadow-lg rounded-lg p-6"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="type a message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
            {successMessage && (
              <p className="mt-4 text-green-600 font-bold text-center">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
