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
    <div className="pt-5 fixed top-0 left-0 w-full z-[9999]">
      <nav className='flex  justify-around gap-2 md:gap-10 p-2 font-bold  bg-gradient-to-r from-[#1a1a1a]/80 via-[#2a2a2a]/70 to-[#1a1a1a]/80 
      backdrop-blur-3xl rounded-full md:mx-[20vw] border border-white/10 text-white shadow-lg mx-2'>
 <button className='md:hidden relative right-5 ' onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        <NavLink to="/" className='hidden md:block translate-y-3'>Home</NavLink>

        <div className='flex-col md:justify-start items-start relative right-16 md:right-0 '>
          <p className='text-center text-2xl'>VΛSUDHΛRΛ</p>
          <p className='text-xs text-center'>Every life matters</p>
        </div>

        <NavLink to="/about" className='hidden md:block translate-y-3 cursor-pointer'>About</NavLink>

        <NavLink to="/contact" className='hidden md:block translate-y-3'>Contact Us</NavLink>

        

      </nav>

     {open && (
  <div className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 w-[92%] z-[9999]">
    <div className="rounded-[28px] border border-white/15 bg-gradient-to-br from-[#1a1a1a]/95 via-[#2a2a2a]/90 to-[#111111]/95 backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.45)] px-4 py-4">
      
      <NavLink
        to="/"
        onClick={() => setOpen(false)}
        className="group flex items-center gap-4 rounded-2xl px-4 py-3 hover:bg-white/8 transition-all duration-300"
      >
        <div className="w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center shadow-sm group-hover:bg-white/12 transition-all duration-300">
          <IoHomeOutline size={20} className="text-white/90" />
        </div>

        <div className="flex flex-col">
          <p className="text-[15px] font-semibold tracking-[0.14em] text-white uppercase">
            Home
          </p>
          <p className="text-[11px] text-white/55 tracking-[0.18em] uppercase">
            Main Page
          </p>
        </div>
      </NavLink>

      <div className="h-px bg-white/8 mx-2 my-1"></div>

      <NavLink
        to="/about"
        onClick={() => setOpen(false)}
        className="group flex items-center gap-4 rounded-2xl px-4 py-3 hover:bg-white/8 transition-all duration-300"
      >
        <div className="w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center shadow-sm group-hover:bg-white/12 transition-all duration-300">
          <RiFileInfoFill size={18} className="text-white/90" />
        </div>

        <div className="flex flex-col">
          <p className="text-[15px] font-semibold tracking-[0.14em] text-white uppercase">
            About
          </p>
          <p className="text-[11px] text-white/55 tracking-[0.18em] uppercase">
            Our Story
          </p>
        </div>
      </NavLink>

      <div className="h-px bg-white/8 mx-2 my-1"></div>

      <NavLink
        to="/contact"
        onClick={() => setOpen(false)}
        className="group flex items-center gap-4 rounded-2xl px-4 py-3 hover:bg-white/8 transition-all duration-300"
      >
        <div className="w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center shadow-sm group-hover:bg-white/12 transition-all duration-300">
          <IoMdContacts size={19} className="text-white/90" />
        </div>

        <div className="flex flex-col">
          <p className="text-[15px] font-semibold tracking-[0.14em] text-white uppercase">
            Contact Us
          </p>
          <p className="text-[11px] text-white/55 tracking-[0.18em] uppercase">
            Get In Touch
          </p>
        </div>
      </NavLink>
    </div>
  </div>
)}

    </div>
  )
}

export default Navbar