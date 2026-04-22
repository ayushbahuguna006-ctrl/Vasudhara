import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Herosection2() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.news-heading', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      })

      gsap.from('.news-item', {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          toggleActions: 'play none none none',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div
        ref={sectionRef}
        className="relative overflow-x-hidden bg-gradient-to-b from-[#76b296]/30 via-[#a1d9be]/40 to-white px-4 sm:px-6 md:px-10 lg:px-16 py-6 md:py-10"
      >
        <p className="news-heading text-2xl sm:text-3xl text-black/70 md:text-4xl md:text-start text-center font-semibold tracking-tight">
          LATEST NEWS AND UPDATES
        </p>

        <div className="flex flex-col border border-black/10 md:mt-10 mt-10 rounded-2xl md:flex-row justify-center md:justify-around items-center md:items-start gap-10 md:gap-6 p-5 md:p-8 text-center bg-white/30 backdrop-blur-md shadow-md">
          
          <div className="w-full max-w-md flex flex-col items-center md:items-start cursor-pointer group transition duration-300">
            <p className="font-medium text-xs sm:text-sm text-black/50 tracking-wider">
              1 May 2026 →
            </p>

            <div className="news-item flex flex-col sm:flex-row items-center gap-4 mt-5 text-center sm:text-left w-full">
              <img
                src="/website-icon.jpg"
                alt="website-picture"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0 shadow-md group-hover:scale-105 transition duration-300"
              />

              <div className="flex flex-col gap-2">
                <p className="text-base sm:text-lg md:text-xl font-medium leading-snug text-black/80 group-hover:text-black transition duration-300">
                  Vasudhara marks a major milestone with the launch of its official website.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-black/60 font-normal">
                  A digital step toward expanding awareness and global outreach.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md flex flex-col items-center md:items-start cursor-pointer group transition duration-300">
            <p className="font-medium text-xs sm:text-sm text-black/50 tracking-wider">
              5 March 2026 →
            </p>

            <div className="news-item flex flex-col sm:flex-row items-center gap-4 mt-5 text-center sm:text-left w-full">
              <img
                src="/tree.jpg"
                alt="tree-pic"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover flex-shrink-0 shadow-md group-hover:scale-105 transition duration-300"
              />

              <div className="flex flex-col gap-2">
                <p className="text-base sm:text-lg md:text-xl font-medium leading-snug text-black/80 group-hover:text-black transition duration-300">
                  Vasudhara plants its first tree, marking the start of its environmental journey.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-black/60 font-normal">
                  A commitment to nurturing nature and building a greener future.
                </p>
              </div>
            </div>
          </div>

        </div>

        <hr className="mt-6 opacity-30" />
      </div>
    </>
  )
}

export default Herosection2