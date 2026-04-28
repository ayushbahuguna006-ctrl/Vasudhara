import React from 'react'
import Navbar from '../Components/Navbar'
import AboutTop1 from '@/AboutTop1'
import AboutCards from '@/AboutCards'
import AboutCards2 from '@/AboutCards2'
import AboutForm from '@/AboutForm'
import AboutFooter from '@/AboutFooter'

const About = () => {
  return (
    // About section completed
    <div>
      <AboutTop1/>
      <AboutCards2/>
      <AboutCards/>
      <AboutForm/>
      <AboutFooter/>
    </div>
  )
}

export default About