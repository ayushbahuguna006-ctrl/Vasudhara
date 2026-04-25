import React from 'react'
import Herosection1 from '../Components/Herosection1'
import Herosection2 from '../Components/Herosection2'
import Herosection3 from '../Components/Herosection3'
import Herosection4 from '@/Herosection4'
import ContactfromHome from '@/ContactfromHome'


function App() {
  return (
    <>
    <div className='-mt-0'>
      <Herosection1 />
      <Herosection2 />
      <Herosection3 />
      <Herosection4/>
      <ContactfromHome/>
      
    </div>
      
    </>
  )
}

export default App