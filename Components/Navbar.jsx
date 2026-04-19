import React from 'react'
import { NavLink } from "react-router-dom"
import MusicButton from "../Components/Music";
 
function Navbar() {
  return (
    <div className="pt-5 ">
      <nav className='flex justify-around gap-2 md:gap-10 p-2 font-bold bg-gradient-to-r from-[#1a1a1a]/80 via-[#2a2a2a]/70 to-[#1a1a1a]/80 
      backdrop-blur-md rounded-full md:mx-[20vw] border border-white/10 text-white shadow-lg mx-2'>

        <NavLink to="/" className='hidden md:block translate-y-3'>Home</NavLink>

        <div className='flex-col justify-start'>
          <p className='text-center text-2xl'>VΛSUDHΛRΛ</p>
          <p className='text-xs text-center'>Every life matters</p>
        </div>

        <NavLink to="/about" className='hidden md:block translate-y-3'>About</NavLink>

        <NavLink to="/contact" className='hidden md:block translate-y-3'>Contact Us</NavLink>
           <div className='md:hidden'>
               <MusicButton />
           </div>

      </nav>
    </div>
  )
}

export default Navbar