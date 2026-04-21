import React from 'react'

function Herosection2() {
  return (
    <>
       <div className='min-h-screen overflow-hidden'>
             <p className='text-3xl text-center font-semibold '>LATEST NEWS AND UPDATES</p>
             <div className='flex justify-around pt-10 pb-10 font-semibold flex-col md:flex-row text-center'>
                <div className='flex flex-col pt-10  md:relative md:left-10'>
                  <p className='font-mono'>1 May 2026</p>
                  <div className='flex flex-col md:flex-row items-center md:gap-5 gap-2 mt-5'>
                    <img src="/website-icon.jpg" alt="website-picture" className='w-20 h-20 rounded-xl' />
                    <p className='text-xl'>Vasudhara launches it's website</p>

                  </div>
                </div>
                <div className='pt-10'>
                   <p className='font-mono'>5 March 2026</p>
                   <div className='flex flex-col md:flex-row items-center md:gap-5 gap-2 mt-5 '>
                    <img src="/tree.jpg" alt="tree-pic" className='w-20 h-20 rounded-xl'/>
                    <p className='text-xl'>Vasudhara plants it's first tree</p>

                  </div>
                </div>
                

            </div>
            <hr />
       </div>
      
    </>
  )
}

export default Herosection2