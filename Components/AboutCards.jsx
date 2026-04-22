import React from 'react'

const AboutCards = () => {
  return (
    // Debugging try 1
    <div className='bg-gray-100 py-16 px-10 mt-10'>
        <h1 className='text-xl md:text-5xl font-serif mb-20'>
            Facilities to Nurture and Care 
        </h1>
        <div className='flex gap-6 flex-wrap'>
            <div className='flex flex-col w-full sm:w-[48%] lg:w-[23%] rounded-xl overflow-hidden bg-[#3b1f1f]'>
                <img src="/card-1.avif" alt="" className='w-full h-100 object-cover'/>
                <div className='bg-[#3b1f1f] text-white px-5 py-5 pb-20 flex-grow'>
                    <p className='text-xs font-bold mt-6 uppercase'>Qurantine units</p>
                    <p className='font-serif lg:text-xl mt-7'>Provinding dedicated care and monitoring for all arriving animals, ensuring their health and seamless integration into their new environment.</p>
                </div>
            </div>
            <div className='flex flex-col sm:w-[48%] lg:w-[23%]  bg-white rounded-xl overflow-hidden'>
                <img src="/card-2.avif" alt="" className='w-full h-100 object-cover'/>
                <div className='bg-[#3b1f1f] text-white px-5 py-5 pb-20 flex-grow'>
                    <p className='text-xs font-bold mt-6 uppercase'>Advanced Wildlife imagine centre</p>
                    <p className='font-serif lg:text-xl mt-7'>Vasudhara's  Advanced Wildlife Imaging Centre provides state-of-the-art radiography, ultrasound, CT, and MRI for precise, stress-free wildlife diagnostics.</p>
                </div>
            </div>
            <div className='sm:w-[48%] lg:w-[23%]  bg-white rounded-xl overflow-hidden flex flex-col'>
                <img src="/card-3.avif" alt="" className='w-full h-100 object-cover'/>
                <div className='bg-[#3b1f1f] text-white p-5 flex-grow'>
                    <p className='text-xs font-bold  mb-2 uppercase'>sterilisation service department</p>
                    <p className='font-serif lg:text-xl'>One of the first veterinary care centres in the country to have a CSSD Mega Unit</p>
                </div>
            </div>
            <div className='sm:w-[48%] lg:w-[23%]  bg-white rounded-xl overflow-hidden flex-col flex'>
                <img src="/card-4.avif" alt="" className='w-full h-100 object-cover'/>
                <div className='bg-[#3b1f1f] text-white p-5 flex-grow'>
                    <p className='text-xs font-bold  mb-2 uppercase'>Animal dentistry </p>
                    <p className='font-serif lg:text-xl'>We prioritise animal comfort through, pain-free and stress-free dental procedures</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCards