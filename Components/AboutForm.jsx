import React from 'react'
import ContactLeft from './ContactInfo'
import ContactForm from './ContactForm'

const AboutForm = () => {
  return (
    
    <div>
      <div className='flex flex-col justify-center items-center'>
      <h1 className=' text-xl lg:text-5xl font-semibold mt-15 mb-1 tracking-[0.1em]'>
        VΛSUDHΛRΛ
      </h1>
      <h1 className='text-xs lg:text-xl'>
        Every life matters
      </h1>
      </div>
      <div className=" max-w-full mx-auto grid md:grid-cols-2 gap-20 justify-between items-start px-6 md:px-10 py-16 ">
        <ContactLeft />
        <ContactForm/>
        </div>
        </div>
  )
}

export default AboutForm