import React from 'react'
import Herosection1 from '../Components/Herosection1'
import Herosection2 from '../Components/Herosection2'
import SmoothScroll from '../Components/SmoothScroll'

function App() {
  return (
    <SmoothScroll>
      <Herosection1 />
      <Herosection2 />
    </SmoothScroll>
  )
}

export default App