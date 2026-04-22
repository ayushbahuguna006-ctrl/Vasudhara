import React from 'react'

const AboutCards = () => {
  return (
    <div className='bg-gray-100 py-16 px-10'>
        <h1 className='text-xl font-serif mb-10'>
            Facilities to Nurture and Care
        </h1>
        <div className='flex gap-6 items-stretch'>
            <div className='flex flex-col w-1/4 bg-white rounded-xl overflow-hidden'>
                <img src="/card-1.avif" alt="" className='w-full h-60 object-cover'/>
                <div className='bg-[#3b1f1f] text-white p-5 flex-grow'>
                    <p className='text-xs font-bold  mb-2 uppercase'>Qurantine units</p>
                    <p className='font-serif lg:text-xl'>Provinding dedicated care and monitoring for all arriving animals, ensuring their health and seamless integration into their new environment</p>
                </div>
            </div>
            <div className='flex flex-col w-1/4 bg-white rounded-xl overflow-hidden'>
                <img src="/card-2.avif" alt="" className='w-full h-60 object-cover'/>
                <div className='bg-[#3b1f1f] text-white p-5 flex-grow'>
                    <p className='text-xs font-bold  mb-2 uppercase'>Advanced Wildlife imagind centre</p>
                    <p className='font-serif lg:text-xl'>Vasudhara's  Advanced Wildlife Imaging Centre provides state-of-the-art radiography, ultrasound, CT, and MRI for precise, stress-free wildlife diagnostics.</p>
                </div>
            </div>
            <div className='w-1/4 bg-white rounded-xl overflow-hidden flex flex-col'>
                <img src="/card-3.avif" alt="" className='w-full h-60 object-cover'/>
                <div className='bg-[#3b1f1f] text-white p-5 flex-grow'>
                    <p className='text-xs font-bold  mb-2 uppercase'>sterilisation service department</p>
                    <p className='font-serif lg:text-xl'>One of the first veterinary care centres in the country to have a CSSD Mega Unit</p>
                </div>
            </div>
            <div className='w-1/4 bg-white rounded-xl overflow-hidden flex-col flex'>
                <img src="/card-4.avif" alt="" className='w-full h-60 object-cover'/>
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