import React, { useRef } from 'react'



const AboutCards2 = () => {
  return (
    
    <div className=' pb-16 pt-6 flex flex-col lg:flex-row items-center min-h-screen px-4 sm:px-8 lg:px-16 bg-[#E9DECE] '>
        
        <div className='w-full lg:w-1/3 flex justify-center flex-col'>
        <div className='p-6'>
        <h3 className='mt-10 leading-tight text-4xl  lg:text-6xl font-bold text-white lg:text-black'>
            The Faces <br/> <span className='text-green-950'>  Behind </span> <br/>Our Mission </h3>
        </div>
        </div>
        <div id='right'
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