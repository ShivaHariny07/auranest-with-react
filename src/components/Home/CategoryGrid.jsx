
import React from 'react'
import { Link } from 'react-router-dom'

const CategoryGrid = () => {
  const categories = [
    {
      name: 'Moisturizer',
      image: '/pictures/moisturizer-1.jpg',
      link: '/category?category=moisturizer'
    },
    {
      name: 'Sunscreen',
      image: '/pictures/sunscreen-2.webp',
      link: '/category?category=sunscreen'
    },
    {
      name: 'Primer',
      image: '/pictures/primer-1.webp',
      link: '/category?category=primer'
    },
    {
      name: 'Foundation',
      image: '/pictures/foundation-2.png',
      link: '/category?category=foundation'
    },
    {
      name: 'Serum',
      image: '/pictures/serum-5.jpg',
      link: '/category?category=serum'
    },
    {
      name: 'Concealer',
      image: '/pictures/concealer-3.webp',
      link: '/category?category=concealer'
    },
    {
      name: 'Lip Stick',
      image: '/pictures/lipstick-1.jpg',
      link: '/category?category=lipstick'
    },
    {
      name: 'Lip Balm',
      image: '/pictures/lipbalm-1.jpg',
      link: '/category?category=lipbalm'
    },
    {
      name: 'Lip Tint',
      image: '/pictures/liptint-1.jpg',
      link: '/category?category=liptint'
    }
  ]

  return (
    <section className="container px-4 py-8 mx-auto mt-8">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Shop by Category</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Link 
            key={index}
            to={category.link} 
            className="block overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl group"
          >
            <img 
              src={category.image} 
              alt={category.name} 
              className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-4 text-center bg-red-100">
              <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryGrid