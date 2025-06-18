import React from 'react'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import HeroCarousel from '../components/Home/HeroCarousel'
import CategoryGrid from '../components/Home/CategoryGrid'

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroCarousel />
      <CategoryGrid />
      <Footer />
    </div>
  )
}

export default Home