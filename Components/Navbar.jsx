import React from 'react'

function Navbar() {
  return (
    <>
      <nav className='flex justify-around gap-2 md:gap-10 p-2 font-bold mt-5 bg-gradient-to-r from-[#1a1a1a]/80 via-[#2a2a2a]/70 to-[#1a1a1a]/80 
      backdrop-blur-md rounded-full md:mx-[20vw] border border-white/10  text-white shadow-lg mx-2'>

        <p className='hidden md:block translate-y-3'>Home</p>
        <div className='flex-col justify-start'>
          <p className='text-center text-2xl'>VSUDHΛRΛ</p>
          <p className='text-xs text-center'>Every life matters</p>
        </div>
        <p className='hidden md:block translate-y-3'>About</p>
        <p className='hidden md:block translate-y-3'>Contact Us</p>

      </nav>
    </>
  )
}

export default Navbar
