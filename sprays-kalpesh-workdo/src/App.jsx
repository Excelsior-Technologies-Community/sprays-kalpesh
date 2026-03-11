import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Hero from './components/Hero/Hero'
import ProductSlider from './components/Slider/ProductSlider'
import Description from './components/2nd-section/Description'
import VideoSection from './components/Video-section/Video-section'
import VersalitySection from './components/Versality-section/Versality-section'
import ProductCategorySlider from './components/ProductCategorySlider/ProductCategorySlider'

import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="App">
        {/* 1. Call the Navbar at the top */}
        <Navbar />
        <Hero />

        {/* 2. Rest of your page content */}
        <Description />

        <ProductSlider />

        <VideoSection />

        <VersalitySection />

        <ProductCategorySlider />

        <Footer />
      </div>
    </>
  )
}

export default App
