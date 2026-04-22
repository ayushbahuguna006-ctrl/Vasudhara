import React from 'react'

const AboutTop1 = () => {
  return (
    <div className='relative h-screen'>
      <img src="/about-bg-1.jpg" alt="" className="w-full h-full object-cover absolute"/>
      <div className=' w-full h-full bg-black opacity-40 absolute '></div> 
      <div className='text-white flex flex-col justify-center px-10 relative'>
        <h1 className='text-4xl md:text-6xl font-serif mt-80 md:mt-165'>
          Securing the Future of Wildlife <br/> Through Science Led Care
        </h1>
        <button className='mt-10 bg-white text-black px-8 py-4 rounded-4xl text-sm  w-40 hover:bg-green-900 hover:text-white transition'>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default AboutTop1