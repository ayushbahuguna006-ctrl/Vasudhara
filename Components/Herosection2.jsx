import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function Herosection2() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 342

      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="overflow-x-hidden bg-white px-4 md:px-15 py-5">
      <p className='text-sm tracking-[0.35em] text-[#8a765d] font-semibold text-center md:text-start md:pl-0.5'>UPDATES</p>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center md:mt-4 gap-4">
        <p className="text-xl md:text-4xl text-[#26351f] font-semibold pl-5 mt-3 md:mt-0 md:pl-0 md:text-center md:text-left">
          LATEST NEWS AND HIGHLIGHTS
        </p>

        <div className="flex gap-3 pl-27 md:pl-0 translate-y-7 md:translate-y-0">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full bg-green-800 text-white border border-black/10 flex items-center justify-center hover:bg-black/80 hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border bg-green-800 text-white border-black/10 flex items-center justify-center hover:bg-black/80 hover:text-white transition-all duration-300"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="overflow-hidden mt-10"
      >
        <div className="flex gap-6 w-max">

          <div className="w-[320px] md:w-[400px] p-5 bg-white/30 backdrop-blur-md rounded-xl border border-black/50 hover:border   shadow shrink-0">
            <p className="text-sm text-black/50">1 May 2026 →</p>
            <div className="flex gap-4 mt-4 items-center">
              <img
                src="/website-icon.jpg"
                className="w-20 h-20 rounded-lg object-cover"
              />
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

          <div className="w-[320px] md:w-[400px] p-5 bg-white/30 backdrop-blur-md rounded-xl border border-black/50 shadow shrink-0">
            <p className="text-sm text-black/50">5 March 2026 →</p>
            <div className="flex gap-4 mt-4 items-center">
              <img
                src="/tree.jpg"
                className="w-20 h-20 rounded-lg object-cover"
              />
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

          <div className="w-[320px] md:w-[400px] p-5 bg-white/30 backdrop-blur-md rounded-xl border border-black/50 shadow shrink-0">
            <p className="text-sm text-black/50">1 May 2026 →</p>
            <div className="flex gap-4 mt-4 items-center">
              <img
                src="/website-icon.jpg"
                className="w-20 h-20 rounded-lg object-cover"
              />
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

          <div className="w-[320px] md:w-[400px] p-5 bg-white/30 backdrop-blur-md rounded-xl border border-black/50 shadow shrink-0">
            <p className="text-sm text-black/50">5 March 2026 →</p>
            <div className="flex gap-4 mt-4 items-center">
              <img
                src="/tree.jpg"
                className="w-20 h-20 rounded-lg object-cover"
              />
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