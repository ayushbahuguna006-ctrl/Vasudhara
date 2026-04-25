import React from 'react'

const AboutCards = () => {
  return (
    // Debugging try 1
    <div className='bg-[#E9DECE] py-16 px-6'>
        <h1 className='text-3xl md:text-5xl font-serif mb-12 text-center text-white'>
            Facilities to Nurture and Care 
        </h1>
        <div className='flex gap-6 flex-wrap justify-center items-stretch'>
            <div className='flex flex-col w-full   sm:w-[47%] lg:w-[23%] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl'>
                <img src="/card-1.avif" alt="" className='w-full   aspect-[4/3] object-cover'/>
                <div className=' text-white  p-6 flex flex-col flex-grow min-h-[200px]'>
                    <p className='text-xs font-bold mb-2 uppercase'>Qurantine units</p>
                    <p className='font-serif text-sm md:text-base lg:text-lg mt-4 leading-relaxed'>Provinding dedicated care and monitoring for all arriving animals, ensuring their health and seamless integration into their new environment.</p>
                </div>
            </div>
            <div className='flex flex-col w-full  sm:w-[47%] lg:w-[23%]   rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl'>
                <img src="/card-2.jpg" alt="" className='w-full  aspect-[4/3] object-cover'/>
                <div className=' text-white p-6 flex flex-col flex-grow min-h-[200px]'>
                    <p className='text-xs font-bold mb-2 uppercase'>Advanced Wildlife imagine centre</p>
                    <p className='font-serif text-sm md:text-base lg:text-lg mt-4 leading-relaxed'>Vasudhara's  Advanced Wildlife Imaging Centre provides state-of-the-art radiography, ultrasound, CT, and MRI for precise, stress-free wildlife diagnostics.</p>
                </div>
            </div>
            <div className='sm:w-[47%] lg:w-[23%]  w-full rounded-xl overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl'>
                <img src="/card-3.avif" alt="" className='w-full  aspect-[4/3]  object-cover'/>
                <div className=' text-white p-6 flex flex-col flex-grow min-h-[200px]'>
                    <p className='text-xs font-bold  mb-2 uppercase'>sterilisation service department</p>
                    <p className='font-serif text-sm md:text-base lg:text-lg mt-4 leading-relaxed'>One of the first veterinary care centres in the country to have a CSSD Mega Unit</p>
                </div>
            </div>
            <div className='sm:w-[47%] lg:w-[23%]  w-full rounded-xl overflow-hidden flex-col flex hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl'>
                <img src="/card-4.avif" alt="" className='w-full aspect-[4/3]  object-cover'/>
                <div className=' text-white p-6 flex flex-col flex-grow min-h-[200px]'>
                    <p className='text-xs font-bold  mb-2 uppercase'>Animal dentistry </p>
                    <p className='font-serif text-sm md:text-base lg:text-lg mt-4 leading-relaxed'>We prioritise animal comfort through, pain-free and stress-free dental procedures</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCards