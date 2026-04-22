import React from 'react'
import Navbar from '../Components/Navbar'
import AboutTop1 from '@/AboutTop1'
import AboutCards from '@/AboutCards'

const About = () => {
  return (
    <div className='-mt-22'>
      <Navbar/>
      <AboutTop1/>
      <AboutCards/>
    </div>
  )
}

export default About