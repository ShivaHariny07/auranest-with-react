import React from 'react'
import { Link } from 'react-router-dom'

const CategoryGrid = () => {
  const categories = [
    {
      name: 'Moisturizer',
      image: '/pictures/moisturizer-1.jpg',
      link: '/category?category=moisturizer',
      description: 'Hydrate & nourish your skin'
    },
    {
      name: 'Sunscreen',
      image: '/pictures/sunscreen-2.webp',
      link: '/category?category=sunscreen',
      description: 'Protect from UV rays'
    },
    {
      name: 'Primer',
      image: '/pictures/primer-1.webp',
      link: '/category?category=primer',
      description: 'Perfect makeup base'
    },
    {
      name: 'Foundation',
      image: '/pictures/foundation-2.png',
      link: '/category?category=foundation',
      description: 'Flawless coverage'
    },
    {
      name: 'Serum',
      image: '/pictures/serum-5.jpg',
      link: '/category?category=serum',
      description: 'Targeted skin treatment'
    },
    {
      name: 'Concealer',
      image: '/pictures/concealer-3.webp',
      link: '/category?category=concealer',
      description: 'Cover imperfections'
    },
    {
      name: 'Lip Stick',
      image: '/pictures/lipstick-1.jpg',
      link: '/category?category=lipstick',
      description: 'Bold & beautiful lips'
    },
    {
      name: 'Lip Balm',
      image: '/pictures/lipbalm-1.jpg',
      link: '/category?category=lipbalm',
      description: 'Soft & moisturized lips'
    },
    {
      name: 'Lip Tint',
      image: '/pictures/liptint-1.jpg',
      link: '/category?category=liptint',
      description: 'Natural lip color'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium beauty products
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={category.link} 
              className="category-card group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                  <div className="flex items-center mt-3 text-sm font-semibold">
                    <span>Shop Now</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Card Footer */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-primary inline-flex items-center">
            <span>View All Products</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid