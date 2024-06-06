import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-sky-300 to-blue-700 text-gray-800 py-20"
    >
      <div className="bg-white w-3/4 rounded-lg container mx-auto p-5">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
