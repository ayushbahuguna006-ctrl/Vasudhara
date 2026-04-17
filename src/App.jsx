import './App.css'
import Home from '../Pages/Home'
import SmoothScroll from '../Components/SmoothScroll'

function App() {
  return (
    <>
    <SmoothScroll>
    <div className='bg-white'>
         <Home/>
    </div>
    </SmoothScroll>
    </>
  )
}

export default App
