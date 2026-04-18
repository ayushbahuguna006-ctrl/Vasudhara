import React from 'react'
import Navbar from '../Components/Navbar'
import ContactContent from '../Components/ContactContent'
import LeftContactContent from '../Components/LeftContactContent'

const Contact = () => {
  return (
    <div className='min-h-screen bg-[#f5f2ed]'>

      <Navbar />
      <ContactContent/>  
      <LeftContactContent/>
     

    </div>
  )
}

export default Contact