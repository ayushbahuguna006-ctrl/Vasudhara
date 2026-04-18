import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const ContactContent = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline()

    
      tl.from(".contact-tag", {
        y: 20,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.8,
        ease: "power3.out",
      })

  
      tl.from(".contact-text", {
        y: 50,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1.2,
        ease: "power3.out",
      }, "-=0.3")

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className='flex flex-col items-center pt-10 md:pt-28 px-4 text-center'
    >
      <p className='contact-tag tracking-[0.3em] text-sm font-bold text-gray-600 mb-6'>
        CONTACT US
      </p>

      <h1 className='contact-text text-4xl md:text-5xl lg:text-6xl font-serif text-[#2d2a26] max-w-4xl'>
        Have a question, idea, or wish to help animals in need? Get in touch
        and be part of our mission — because every life matters.
      </h1>
    </div>
  )
}

export default ContactContent