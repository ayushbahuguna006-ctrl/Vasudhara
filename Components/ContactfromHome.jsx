import React from 'react'
import { ArrowRight } from "lucide-react";

function ContactfromHome() {
  return (
    
      <section className="bg-[#032b24] px-4 md:px-8 lg:px-10 py-12  md:py-20 overflow-hidden">
      
     
      <h1 className="text-[#f3efe4] text-5xl md:text-7xl lg:text-8xl text-center  font-serif leading-none mb-8 md:mb-14">
        Get in Touch
      </h1>

    
      <div className="relative rounded-[1.8rem] overflow-hidden min-h-[75vh] md:min-h-[85vh] w-full">
        
  
        <img
          src="/humanwithplant.jpg" 
          alt="Plants"
          className="absolute inset-0 w-full h-full object-cover"
        />

      
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>

    
        <div className="absolute bottom-5 left-3 md:bottom-10 md:left-10 z-20 bg-[#ece7db] w-[92%] sm:w-[75%] md:w-[38rem] rounded-[1.7rem] p-6 md:p-10 shadow-2xl">
          
          <p className="text-[#1b1b1b] text-base md:text-2xl leading-relaxed font-medium">
            Have a question, idea, or wish to help animals in need?
            Get in touch and be part of our mission —
            because every life matters.
          </p>

        
          <div className="flex justify-end mt-8">
            <button className="group bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300">
              <span className="text-sm md:text-base font-medium">
                Contact Us
              </span>

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-all duration-300"
              />
            </button>
          </div>
        </div>

     
       
      </div>
    </section>
  )
}

export default ContactfromHome