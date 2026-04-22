import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import MusicButton from "../Components/Music";
import { IoHomeOutline } from "react-icons/io5";
import { RiFileInfoFill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pt-5  sticky top-0">
      <nav className='flex  justify-around gap-2 md:gap-10 p-2 font-bold  bg-gradient-to-r from-[#1a1a1a]/80 via-[#2a2a2a]/70 to-[#1a1a1a]/80 
      backdrop-blur-3xl rounded-full md:mx-[20vw] border border-white/10 text-white shadow-lg mx-2'>
 <button className='md:hidden ' onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        <NavLink to="/" className='hidden md:block translate-y-3'>Home</NavLink>

        <div className='flex-col md:justify-start items-start relative right-4 '>
          <p className='text-center text-2xl'>VΛSUDHΛRΛ</p>
          <p className='text-xs text-center'>Every life matters</p>
        </div>

        <NavLink to="/about" className='hidden md:block translate-y-3'>About</NavLink>

        <NavLink to="/contact" className='hidden md:block translate-y-3'>Contact Us</NavLink>

        <div className='md:hidden flex items-center gap-3'>
          <MusicButton />
        </div>

      </nav>

      {open && (
        <div className='md:hidden mx-2 mt-3 rounded-3xl bg-gradient-to-r from-[#1a1a1a]/80 via-[#2a2a2a]/70 to-[#1a1a1a]/80 backdrop-blur-md border border-white/10 text-white shadow-lg px-6 py-5 flex justify-around gap-4'>
          <div className='flex items-center gap-1'><IoHomeOutline /><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></div>
          <div className='flex items-center gap-1'><RiFileInfoFill /><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></div>
          <div className='flex items-center gap-1'><IoMdContacts /><NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink></div>
        </div>
      )}

    </div>
  )
}

export default Navbar