import React from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Hero from './components/Hero/Hero'
import ProductSlider from './components/Slider/ProductSlider'
import Description from './components/2nd-section/Description'
import VideoSection from './components/Video-section/Video-section'
import VersalitySection from './components/Versality-section/Versality-section'
import ProductCategorySlider from './components/ProductCategorySlider/ProductCategorySlider'
import Footer from './components/Footer/Footer'
import UniqueSection from './components/UniqueSection/UniqueSection'
import ManufacturingProcess from './components/ManufacturingProcess/ManufacturingProcess'
import Newsletter from './components/Newsletter/Newsletter'
import FeaturedBlog from './components/FeaturedBlog/FeaturedBlog'
import Testimonials from './components/Testimonials/Testimonials'
import Shop from './Shop/Shop'
import Wishlist from './Wishlist/Wishlist'
import Cart from './Cart/Cart'
import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Hero />
      <Description />
      <ProductSlider />
      <VideoSection />
      <VersalitySection />
      <ProductCategorySlider />
      <UniqueSection />
      <ManufacturingProcess />
      <Newsletter />
      <FeaturedBlog />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        {/* You can add more routes here, like /collections/mens-fragrances */}
        <Route path="/collections/mens-fragrances" element={<Shop />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
