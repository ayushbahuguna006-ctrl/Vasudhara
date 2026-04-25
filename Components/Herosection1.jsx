import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

      gsap.from('.hero-text p', {
        opacity: 0,
        duration: 1,
        ease: 'power1.out',
        delay: 0.3
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={heroRef}
      className='relative min-h-screen overflow-hidden text-white'
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover'
      >
        <source src='/herovideo.mp4' type='video/mp4' />
      </video>

      <div className='absolute inset-0 bg-black/30 z-10'></div>

      <div className='relative z-20 min-h-screen'>
        

        <div className='hero-text absolute bottom-55 md:left-8 left-2 font-bold text-2xl md:text-5xl'>
          <p>Vasudhara launches World's</p>
          <p>1st Global University for</p>
          <p>Wildlife and Veterinary Services.</p>
        </div>

        <button className='rounded-full px-10 font-semibold border hover:bg-green-700 border-white absolute bottom-[170px] md:left-7 left-2 p-2'>
          Learn More
        </button>

        <div className='scroll-indicator absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center'>
          <div className='w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2'>
            <div className='w-1 h-2 bg-white rounded-full scroll-dot'></div>
          </div>
          <p className='text-xs mt-2 tracking-[0.3em]'>SCROLL</p>
        </div>
      </div>
    </div>
  )
}

export default Herosection1