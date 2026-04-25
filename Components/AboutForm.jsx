import React from 'react'


const AboutForm = () => {
  return (
    
    <div className='bg-green-950 min-h-screen pb-15 lg:pb-25'>
      <div className='flex flex-col justify-center items-center '>
      <h1 className=' text-3xl lg:text-4xl font-semibold mt-10 mb-1 lg:mt-15 tracking-[0.1em] text-gray-300'>
        VΛSUDHΛRΛ
      </h1>
      <h1 className='text-xs lg:text-xl text-gray-400'>
        Every life matters
      </h1>
      </div>
      <div className=" max-w-full mx-auto grid md:grid-cols-2 justify-between items-start px-6 md:px-10 gap-20 ">
        <div
      className="flex flex-col justify-center mt-10 rounded-xl px-8 md:px-16 "
    >
      <div className="contact-heading text-3xl md:text-5xl font-serif text-gray-300 leading-tight mb-16"><h1>
        <p className="text-center md:text-start  ">Get in Touch</p> 
         <p className="text-center md:text-start ">With Us</p>
      </h1></div>

      <div className="space-y-10 text-gray-300">
        <div className="contact-item">
          <p className="uppercase text-sm tracking-widest font-semibold text-gray-500 mb-2">
            For General Queries
          </p>
          <p className="text-xl md:text-2xl font-serif">Contact@Vasudhara.in</p>
          <p className="text-xl md:text-2xl font-serif">+91 90160 12345</p>
        </div>

        <div className="contact-item">
          <p className="uppercase text-sm font-semibold tracking-widest text-gray-500 mb-2">
            For Media
          </p>
          <p className="text-xl md:text-2xl font-serif">Media@Vasudhara.in</p>
          <p className="text-xl md:text-2xl font-serif">+91 70160 12345</p>
        </div>

        <div className="contact-item">
          <p className="uppercase text-sm font-semibold tracking-widest text-gray-500 mb-2">
            For Career Opportunities
          </p>
          <p className="text-xl md:text-2xl font-serif">Careers@Vasudhara.in</p>
        </div>
      </div>
    </div>
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

        </div>
        </div>
  )
}

export default AboutForm