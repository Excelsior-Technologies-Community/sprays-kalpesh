import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Hero from './components/Hero/Hero'
import ProductSlider from './components/Slider/ProductSlider'
import Description from './components/2nd-section/Description'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="App">
        {/* 1. Call the Navbar at the top */}
        <Navbar />
        <Hero />

        {/* 2. Rest of your page content */}
        

            <ProductSlider />
          

        <Description />

      </div>
    </>
  )
}

export default App
