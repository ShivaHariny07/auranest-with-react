import React from 'react'
import { useCart } from '../../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    // Show notification
    const notification = document.createElement('div')
    notification.className = 'fixed z-50 px-6 py-3 text-white transition-transform duration-300 transform translate-x-full bg-green-500 rounded-lg shadow-lg top-4 right-4'
    notification.innerHTML = `
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <span>${product.name} added to cart!</span>
      </div>
    `
    
    document.body.appendChild(notification)
    
    setTimeout(() => {
      notification.classList.remove('translate-x-full')
    }, 100)
    
    setTimeout(() => {
      notification.classList.add('translate-x-full')
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md product-card">
      <img src={product.image} alt={product.name} className="object-cover w-full h-48" />
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="mb-3 text-sm text-gray-600">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#B22222]">₹{product.price}</span>
          <button 
            onClick={handleAddToCart}
            className="px-4 py-2 font-semibold text-white rounded add-to-cart-btn"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard