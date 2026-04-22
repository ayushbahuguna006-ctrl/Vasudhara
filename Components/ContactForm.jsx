import React from "react";

const ContactForm = () => {
 

  return (
    <div
      className="w-full md:mt-50 max-w-xl bg-white/70 backdrop-blur-md rounded-2xl p-10 shadow-md contact-form"
    >
      <form className="space-y-6">

        <input
          type="text"
          placeholder="Name"
          className="contact-input w-full border-b border-gray-300 py-3 outline-none bg-transparent"
        />

        <input
          type="email"
          placeholder="Email"
          className="contact-input w-full border-b border-gray-300 py-3 outline-none bg-transparent"
        />

        <input
          type="text"
          placeholder="Phone (Optional)"
          className="contact-input w-full border-b border-gray-300 py-3 outline-none bg-transparent"
        />

        <button className="contact-input w-full bg-black text-white py-3 rounded-lg">
          Submit
        </button>

      </form>
    </div>
  );
};

export default ContactForm;