import React, { useEffect, useRef } from 'react'
import Navbar from './Navbar'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MusicButton from './Music'

gsap.registerPlugin(ScrollTrigger)

function Herosection1() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.scroll-indicator', {
        opacity: 0,
        y: 20,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'top -100',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={heroRef}
      className='min-h-screen text-black relative bg-gradient-to-b from-[#d9d5b8] to-white'
    >
      <Navbar />
      <div className='hidden md:block'>
        <MusicButton/>
      </div>

      <div className='absolute bottom-40 md:left-8 left-2 font-bold text-2xl md:text-5xl'>
        <p>Vasudhara launches World's</p>
        <p>1st Global University for</p>
        <p>Wildlife and Veterinary Services.</p>
      </div>

      <button className='rounded-full px-10 font-semibold border hover:bg-green-700 border-blue-200 absolute bottom-[100px] md:left-7 left-2 p-2'>
        Learn More
      </button>

      <div className='scroll-indicator absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center'>
        <div className='w-6 h-10 border-2 border-black rounded-full flex justify-center pt-2'>
          <div className='w-1 h-2 bg-black rounded-full scroll-dot'></div>
        </div>
        <p className='text-black text-xs mt-2 tracking-[0.3em]'>SCROLL</p>
      </div>
    </div>



  )
}

export default Herosection1