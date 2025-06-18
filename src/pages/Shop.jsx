import React, { useState } from 'react'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import ProductCard from '../components/Product/ProductCard'
import { products } from '../data/products'

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { key: 'all', label: 'All Products' },
    { key: 'moisturizer', label: 'Moisturizer' },
    { key: 'sunscreen', label: 'Sunscreen' },
    { key: 'serum', label: 'Serum' },
    { key: 'foundation', label: 'Foundation' },
    { key: 'lipstick', label: 'Lipstick' },
    { key: 'concealer', label: 'Concealer' }
  ]

  const handleFilter = (category) => {
    setActiveFilter(category)
    if (category === 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(product => product.category === category))
    }
  }

  return (
    <div className="bg-gray-50">
      <Navbar />
      
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Shop All Products</h1>
          <p className="max-w-2xl mx-auto text-gray-600">Discover our complete collection of premium beauty and skincare products</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => handleFilter(category.key)}
              className={`filter-btn px-6 py-2 rounded-full border-2 border-[#B22222] font-medium transition-all ${
                activeFilter === category.key 
                  ? 'bg-[#B22222] text-white' 
                  : 'text-[#B22222] hover:bg-[#B22222] hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Shop