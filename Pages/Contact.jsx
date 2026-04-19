import React from 'react'
import Navbar from '../Components/Navbar'
import ContactContent from '../Components/ContactContent'
import LeftContactContent from '../Components/LeftContactContent'
import RightContactContext from '../Components/RightContactContext'
import ContactFAQ from '../Components/ContactFAQ'
import ContactFooter from '@/ContactFooter'

const Contact = () => {
  return (
    <div className='min-h-screen bg-[#f5f2ed]'>

      <Navbar />
      <ContactContent/>  
      <div className="max-w-full mx-auto grid md:grid-cols-2 gap-20 justify-between items-start px-6 md:px-10 py-16">
      <LeftContactContent />
      <RightContactContext />
</div>   
      <ContactFAQ/>
      <ContactFooter/>

    </div>
  )
}

export default Contact