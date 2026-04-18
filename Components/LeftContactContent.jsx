import React from "react";

const ContactLeft = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen px-8 md:px-16 bg-[#f5f1ea]">

      <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-16">
        Get in Touch <br /> With Us
      </h1>

      <div className="space-y-10 text-gray-700">

        <div>
          <p className="uppercase text-sm tracking-widest font-semibold text-gray-500 mb-2">
            For General Queries
          </p>
          <p className="text-2xl font-serif">Contact@Vantara.in</p>
          <p className="text-2xl font-serif">+91 90160 12345</p>
        </div>

        <div>
          <p className="uppercase text-sm font-semibold tracking-widest text-gray-500 mb-2">
            For Media
          </p>
          <p className="text-2xl font-serif">Media@Vantara.in</p>
          <p className="text-2xl font-serif">+91 70160 12345</p>
        </div>

        <div>
          <p className="uppercase text-sm font-semibold tracking-widest text-gray-500 mb-2">
            For Career Opportunities
          </p>
          <p className="text-2xl font-serif">Careers@Vantara.in</p>
        </div>

      </div>
    </div>
  );
};

export default ContactLeft;