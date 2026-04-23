import React, { useState } from 'react'

function Herosection3() {
  const [active, setActive] = useState(0)

  const initiatives = [
    {
      title: 'RESCUE AND RECOVERY',
      description:
        'At Vantara, rescue is the foundation of animal care. We locate and secure wildlife impacted by habitat loss, conflict, or confinement, conducting every operation with precision and compassion. Our teams minimise stress, provide immediate veterinary support, and ensure a safe, stabilised transition into structured recovery, whether animals arrive from within India or internationally.',
    },
    {
      title: 'TREATMENT AND CARE',
      description:
        'At Vantara, rescue is the foundation of animal care. We locate and secure wildlife impacted by habitat loss, conflict, or confinement, conducting every operation with precision and compassion. Our teams minimise stress, provide immediate veterinary support, and ensure a safe, stabilised transition into structured recovery, whether animals arrive from within India or internationally.',
    },
    {
      title: 'REHABILITATION AND SUPPORT',
      description:
        'At Vantara, rescue is the foundation of animal care. We locate and secure wildlife impacted by habitat loss, conflict, or confinement, conducting every operation with precision and compassion. Our teams minimise stress, provide immediate veterinary support, and ensure a safe, stabilised transition into structured recovery, whether animals arrive from within India or internationally.',
    },
    {
      title: 'CONSERVATION, BREEDING AND REBUILDING',
      description:
        'At Vantara, rescue is the foundation of animal care. We locate and secure wildlife impacted by habitat loss, conflict, or confinement, conducting every operation with precision and compassion. Our teams minimise stress, provide immediate veterinary support, and ensure a safe, stabilised transition into structured recovery, whether animals arrive from within India or internationally.',
    },
  ]

  return (
    <>
      <div className='min-h-screen bg-white py-10 overflow-hidden'>
        <p className='font-semibold text-2xl md:text-4xl text-center md:text-start md:pl-16.5 text-black/70 '>
          CORE INITIATIVES
        </p>

        <div className='flex md:flex-row flex-col justify-between items-start pt-10'>
          <div className='md:w-[45vw] w-full flex flex-col gap-4 px-3 md:px-0 md:pl-11'>
            {initiatives.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`rounded-3xl p-6  cursor-pointer transition-all ease-in duration-200 ${
                  active === index
                    ? 'bg-[#ddd0bc] border border-[#cdbfa9] shadow-sm'
                    : 'bg-transparent'
                }`}
              >
                <p className={`md:text-lg text-base text-black font-medium text-center md:text-start hover:rounded-lg ${
                  active === index
                    ? 'hover:bg-transparent px-10 hover:transition-all hover:ease-in'
                    : "hover:bg-[#ddd0bc] hover:px-10  hover:transition-all hover:ease-in"
                }`}>
                  {item.title} ▼
                </p>

                {active === index && (
                  <p className='text-[#5f564b] leading-8 pt-5 text-center md:text-start'>
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className='md:w-[48vw] w-full mt-10 md:mt-0 px-3 md:px-5'>
            <img
              src='/tree2.jpg'
              className='w-full md:h-[90vh] object-cover rounded-[2rem] md:-translate-y-20'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Herosection3

// md:text-lg text-base text-black font-medium text-center md:text-start hover:bg-amber-800/10 hover:rounded-xl