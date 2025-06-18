import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import ProductCard from '../components/Product/ProductCard'
import { getProductsByCategory, categoryInfo } from '../data/products'

const Category = () => {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const [categoryData, setCategoryData] = useState(null)
  const category = searchParams.get('category')

  useEffect(() => {
    if (category && categoryInfo[category]) {
      const categoryProducts = getProductsByCategory(category)
      setProducts(categoryProducts)
      setCategoryData(categoryInfo[category])
      document.title = `${categoryInfo[category].title} - AuraNest.shop`
    } else {
      setProducts([])
      setCategoryData(null)
    }
  }, [category])

  if (!categoryData) {
    return (
      <div className="bg-gray-50">
        <Navbar />
        <div className="container px-4 py-8 mx-auto">
          <div className="py-16 text-center">
            <svg className="w-24 h-24 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Category not found</h3>
            <p className="mt-2 text-gray-500">We couldn't find the requested category.</p>
            <Link 
              to="/shop" 
              className="mt-4 inline-block bg-[#B22222] text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Browse All Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="container px-4 py-4 mx-auto">
        <nav className="text-sm">
          <ol className="inline-flex p-0 list-none">
            <li className="flex items-center">
              <Link to="/" className="text-[#B22222] hover:underline">Home</Link>
              <svg className="w-3 h-3 mx-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
              </svg>
            </li>
            <li>
              <span className="text-gray-500">{categoryData.title}</span>
            </li>
          </ol>
        </nav>
      </div>

      <div className="container px-4 py-8 mx-auto">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">{categoryData.title}</h1>
          <p className="max-w-2xl mx-auto text-gray-600">{categoryData.description}</p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <svg className="w-24 h-24 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-2 text-gray-500">We couldn't find any products in this category.</p>
            <Link 
              to="/shop" 
              className="mt-4 inline-block bg-[#B22222] text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Category