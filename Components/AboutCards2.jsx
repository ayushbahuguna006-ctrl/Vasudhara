import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'



const AboutCards2 = () => {
    const scrollRef = useRef(null)
    
      const scroll = (direction) => {
        if (scrollRef.current) {
          const amount = scrollRef.current.clientWidth * 0.8
    
          scrollRef.current.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth',
          })
        }
      }
  return (
    
    <div className='lg:pb-5 pb-0 pt-6 flex flex-col lg:flex-row items-center px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#d5b687] via-[#dfcdaf] to-[#efe3cc]'>
        
        <div className='w-full lg:w-1/3 flex justify-center flex-col'>
        <div>
        <div className='mt-10 leading-tight text-4xl  lg:text-6xl   font-semibold  text-[#26351f]/50 ml-14 lg:ml-0 font- '>
            <p>The Faces <span className='text-green-900  '>Behind</span>  </p>
            <p className='ml-10 lg:ml-0'>Our Misson</p> </div>
             <div className="flex gap-3 lg:mt-4 mt-0 mb-6 translate-y-7 md:translate-y-0 lg:mt-10">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 lg:w-14 lg:h-14  rounded-full border-2 border-black/30 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 ml-40 lg:ml-20"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-black/30 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
          >
            <ChevronRight size={22} />
          </button>
        </div>
        </div>
        </div>
        
        <div id='right'
            ref={scrollRef}
             className='w-full flex flex-nowrap gap-6 lg:w-2/3 p-4 lg:p-6 overflow-x-auto scroll-smooth'>
        
        <div>
            <div className='lg:h-110 mt-6 lg:mt-10 sm:w-72 w-64 lg:w-78 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl '>
            <img className='h-full w-full object-cover' src="/ceo1.jpg" alt="" />
           </div>
            <div className='flex items-center lg:justify-center ml-2 lg:ml-0 mt-3'>
            <h1 className='uppercase text-sm tracking-[0.1em] font-semibold text-green-950 '>
                Shri. Vivaan Karani <br/>
                CEO
            </h1>
        </div>
        </div>
        
       <div>
         <div className='lg:h-110 mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-2.jpg" alt="" />
            
        </div>
        <div className='flex items-center lg:justify-center lg:ml-0 ml-2 mt-3'>
            <h1 className='uppercase text-sm tracking-[0.1em] font-semibold text-green-950'>
                Mr. Partap Singh
            </h1>
        </div>
       </div>
       <div>
         <div className='lg:h-110 mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-3.jpg" alt="" />
            
        </div>
        <div className='flex items-center lg:justify-center lg:ml-0 ml-2 mt-3'>
            <h1 className='uppercase text-sm tracking-[0.1em] font-semibold text-green-950'>
                Mr. Hustinder Singh
            </h1>
        </div>
       </div>
       <div>
         <div className='lg:h-110 mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-4.jpg" alt="" />
            
        </div>
        <div className='flex items-center lg:justify-center lg:ml-0 ml-2 mt-3'>
            <h1 className='uppercase text-sm tracking-[0.1em] font-semibold text-green-950'>
                Dr. Piyush jain
            </h1>
        </div>
       </div>
       <div>
         <div className='lg:h-110 mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-5.jpg" alt="" />
            
        </div>
        <div className='flex items-center lg:justify-center lg:ml-0 ml-2 mt-3'>
            <h1 className='uppercase text-sm tracking-[0.1em] font-semibold text-green-950'>
               Mr. Soni Pabla
            </h1>
        </div>
       </div>
       <div>
         <div className='lg:h-110 mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-6.jpg" alt="" />
            
        </div>
        <div className='flex items-center lg:justify-center lg:ml-0 ml-2 mt-3'>
            <h1 className='uppercase text-sm tracking-[0.1em] font-semibold text-green-950'>
                Mr. Mittal Kumar
            </h1>
        </div>
       </div>
       <div>
         <div className='lg:h-110 mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-7.jpg" alt="" />
            
        </div>
        <div className='flex items-center lg:justify-center lg:ml-0 ml-2 mt-3'>
            <h1 className='uppercase text-sm tracking-[0.1em] font-semibold text-green-950'>
                Mr. Sarthak Duvedi
            </h1>
        </div>
       </div>
       <div>
         <div className='lg:h-110 mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-8.jpg" alt="" />
            
        </div>
        <div className='flex items-center lg:justify-center lg:ml-0 ml-2 mt-3'>
            <h1 className='uppercase text-sm tracking-[0.1em] font-semibold text-green-950'>
                Mr. Abdul Mishra
            </h1>
        </div>
       </div>
       <div>
         <div className='lg:h-110 mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-9.jpg" alt="" />
            
        </div>
        <div className='flex items-center lg:justify-center lg:ml-0 ml-2 mt-3'>
            <h1 className='uppercase text-sm tracking-[0.1em] font-semibold text-green-950'>
                Mr. Anil Kumar
            </h1>
        </div>
       </div>
       <div>
         <div className='lg:h-110 mt-6 lg:mt-10 w-64 sm:w-72 lg:w-80 sm:h-[350px] h-[300px] shrink-0 overflow-hidden relative rounded-3xl'>
            <img className='h-full w-full object-cover' src="/mr-10.jpg" alt="" />
            
        </div>
        <div className='flex items-center lg:justify-center lg:ml-0 ml-2 mt-3'>
            <h1 className='uppercase text-sm tracking-[0.1em] font-semibold text-green-950'>
                Mr. Kartik Chawla 
            </h1>
        </div>
       </div>

        
        
        </div>
    </div>
  )
}

export default AboutCards2