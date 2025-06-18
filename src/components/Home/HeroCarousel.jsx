import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    {
      image: '/pictures/hero-1.jpg',
      content: {
        organic: 'Limited Time Offer',
        title: 'Buy Above ₹2000\nGet ₹500 Worth of\nProducts Free!',
        description: 'Discover amazing deals and get more for your money with our special offer!',
        button: 'Discover More',
        position: 'left'
      }
    },
    {
      image: '/pictures/hero-2.jpeg',
      content: {
        organic: 'Exclusive Deal',
        title: 'Flat 20% Off\nOn ₹5000 Spend!',
        description: 'Unlock incredible savings on your next purchase. Limited time offer!',
        button: 'Shop Now',
        position: 'center-top'
      }
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero-section py-8">
      <div className="container mx-auto px-4">
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
          <div 
            className="flex transition-transform duration-700 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="slide-wrapper">
                <img src={slide.image} alt={`Offer ${index + 1}`} />
                <div className={`hero-content-overlay ${slide.content.position === 'center-top' ? 'center-top' : ''}`}>
                  <span className="hero-organic">{slide.content.organic}</span>
                  <h1 className="hero-main-title">
                    {slide.content.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < slide.content.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h1>
                  <p className="hero-description">{slide.content.description}</p>
                  <Link to="/shop">
                    <button className="hero-button">{slide.content.button}</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="arrow-btn prev" aria-label="Previous Slide">
            <svg className="arrow-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button onClick={nextSlide} className="arrow-btn next" aria-label="Next Slide">
            <svg className="arrow-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white shadow-lg scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel