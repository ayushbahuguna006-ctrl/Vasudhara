import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Herosection2() {
  const sectionRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = scrollRef.current
      const totalWidth = el.scrollWidth - window.innerWidth

      gsap.to(el, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          scrub: 1,
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="overflow-x-hidden  bg-gradient-to-b from-[#76b296]/30 via-[#a1d9be]/40 to-white px-4 md:px-10 py-10"
    >
      <p className="text-2xl md:text-4xl text-black/70 font-semibold text-center md:text-left">
        LATEST NEWS 
      </p>

      <div className="overflow-hidden mt-10">
        <div ref={scrollRef} className="flex gap-6 w-max">

          <div className="w-[320px] md:w-[400px] p-5 bg-white/30 backdrop-blur-md rounded-xl border border-black/10 shadow shrink-0">
            <p className="text-sm text-black/50">1 May 2026 →</p>
            <div className="flex gap-4 mt-4 items-center">
              <img src="/website-icon.jpg" className="w-20 h-20 rounded-lg object-cover" />
              <div>
                <p className="font-medium text-black/80">
                  Vasudhara launches its website.
                </p>
                <p className="text-sm text-black/60">
                  A digital step toward global outreach.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[320px] md:w-[400px] p-5 bg-white/30 backdrop-blur-md rounded-xl border border-black/10 shadow shrink-0">
            <p className="text-sm text-black/50">5 March 2026 →</p>
            <div className="flex gap-4 mt-4 items-center">
              <img src="/tree.jpg" className="w-20 h-20 rounded-lg object-cover" />
              <div>
                <p className="font-medium text-black/80">
                  Vasudhara plants its first tree.
                </p>
                <p className="text-sm text-black/60">
                  A step toward a greener future.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[320px] md:w-[400px] p-5 bg-white/30 backdrop-blur-md rounded-xl border border-black/10 shadow shrink-0">
            <p className="text-sm text-black/50">1 May 2026 →</p>
            <div className="flex gap-4 mt-4 items-center">
              <img src="/website-icon.jpg" className="w-20 h-20 rounded-lg object-cover" />
              <div>
                <p className="font-medium text-black/80">
                  Vasudhara launches its website.
                </p>
                <p className="text-sm text-black/60">
                  A digital step toward global outreach.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[320px] md:w-[400px] p-5 bg-white/30 backdrop-blur-md rounded-xl border border-black/10 shadow shrink-0">
            <p className="text-sm text-black/50">5 March 2026 →</p>
            <div className="flex gap-4 mt-4 items-center">
              <img src="/tree.jpg" className="w-20 h-20 rounded-lg object-cover" />
              <div>
                <p className="font-medium text-black/80">
                  Vasudhara plants its first tree.
                </p>
                <p className="text-sm text-black/60">
                  A step toward a greener future.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <hr className="mt-10 opacity-30" />
    </div>
  )
}

export default Herosection2