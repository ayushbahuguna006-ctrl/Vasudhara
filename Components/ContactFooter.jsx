import React from 'react'

const ContactFooter = () => {
  return (
    <footer className=' bg-green-900 px-6 translate-y-5 py-8 md:py-12 text-white'>
        <div className='flex flex-col items-center max-w-7xl mx-auto md:flex-row justify-between gap-4'>
            <div className='flex flex-col items-center gap-8'>
                <div className='flex items-center gap-6 lg:gap-15'>
                    <img src="/logo1.png" alt="" className='h-10 md:h-20 ' />
                    <img src="/logo2.png" alt="" className='h-10 md:h-20' />
                    <img src="/logo3.svg" alt="" className='h-10 md:h-20' />
                    <img src="/logo4.svg" alt="" className='h-10 md:h-20' />
                </div>
                <p className='text-gray-300 text-sm text-center md:text-left'>
                    2026 Copyright © All Right Reserved. Financially Supported by Reliance Foundation.
                </p>
            </div>
            <div className='flex items-center gap-6'>
                <p className='text-sm hover:underline'>
                    Privacy Policy
                </p>
                <p className='text-sm hover:underline'>
                    Terms & Conditions
                </p>
            </div>
        </div>
    </footer>
  )
}

export default ContactFooter