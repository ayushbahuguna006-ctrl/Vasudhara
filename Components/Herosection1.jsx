import React from 'react'
import Navbar from './Navbar'

function Herosection1() {
  return (
    <div className='min-h-screen relative'>
      <Navbar />

      <div className='absolute bottom-40 md:left-8 left-2 font-bold text-2xl md:text-5xl'>
        <p>Vasudhara launches World's</p>
        <p> 1st Global University for</p>
        <p> Wildlife and Veterinary Services.</p>
      </div>
       <div className='mt-10'>
            <button className='rounded-4xl px-10 font-semibold  border hover:bg-green-700 border-blue-200 absolute bottom-25 md:left-7 left-2 p-2'>Learn More</button>
        </div>
     

    </div>
  )
}

export default Herosection1