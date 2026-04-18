import React from 'react'
import Navbar from '../Components/Navbar'
import ContactContent from '../Components/ContactContent'
import LeftContactContent from '../Components/LeftContactContent'
import RightContactContext from '../Components/RightContactContext'

const Contact = () => {
  return (
    <div className='min-h-screen bg-[#f5f2ed]'>

      <Navbar />
      <ContactContent/>  
      <LeftContactContent/>
      <RightContactContext/>     

    </div>
  )
}

export default Contact