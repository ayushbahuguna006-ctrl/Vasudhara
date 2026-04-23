import './App.css'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import SmoothScroll from '../Components/SmoothScroll'
import ScrollToTop from "../Components/ScrollToTop";
import Navbar from "../Components/Navbar";
import MusicButton from "../Components/Music";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='bg-white'>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <MusicButton />

        <SmoothScroll>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </div>
  )
}

export default App