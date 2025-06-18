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
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full max-w-screen-xl mx-auto mt-6 overflow-hidden rounded shadow-lg">
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
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
    </section>
  )
}

export default HeroCarousel