import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import CartModal from '../Cart/CartModal'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartModalOpen, setIsCartModalOpen] = useState(false)
  const { getCartItemsCount } = useCart()
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const openCartModal = () => {
    setIsCartModalOpen(true)
  }

  const closeCartModal = () => {
    setIsCartModalOpen(false)
  }

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-[#B22222]">
        <div className="flex items-center space-x-3">
          <img src="/pictures/logo.jpg" alt="Logo" className="w-auto h-12 rounded-lg shadow-lg" />
          <span className="text-2xl italic font-extrabold tracking-wide text-white select-none brand-name">AuraNest</span>
        </div>

        <div className="hidden space-x-6 md:flex">
          <Link 
            to="/" 
            className={`text-white hover:text-gray-200 font-medium ${isActive('/') ? 'border-b-2 border-white' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className={`text-white hover:text-gray-200 font-medium ${isActive('/shop') ? 'border-b-2 border-white' : ''}`}
          >
            Shop
          </Link>
          <Link 
            to="/contact" 
            className={`text-white hover:text-gray-200 font-medium ${isActive('/contact') ? 'border-b-2 border-white' : ''}`}
          >
            Contact
          </Link>
          <Link 
            to="/blog" 
            className={`text-white hover:text-gray-200 font-medium ${isActive('/blog') ? 'border-b-2 border-white' : ''}`}
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            className={`text-white hover:text-gray-200 font-medium ${isActive('/about') ? 'border-b-2 border-white' : ''}`}
          >
            About
          </Link>
        </div>

        <div className="items-center hidden space-x-4 md:flex">
          <button 
            onClick={openCartModal}
            className="relative font-medium text-white hover:underline"
          >
            Cart ({getCartItemsCount()})
          </button>
          <button className="font-medium text-white hover:underline">Login</button>
          <button className="bg-white text-[#B22222] px-4 py-2 rounded hover:bg-gray-200 transition font-medium">
            Sign Up
          </button>
        </div>

        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none" 
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="px-6 pb-4 space-y-2 bg-white shadow md:hidden">
          <Link 
            to="/" 
            className={`block text-[#B22222] hover:text-red-700 font-medium ${isActive('/') ? 'font-bold' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/shop" 
            className={`block text-[#B22222] hover:text-red-700 font-medium ${isActive('/shop') ? 'font-bold' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop
          </Link>
          <Link 
            to="/contact" 
            className={`block text-[#B22222] hover:text-red-700 font-medium ${isActive('/contact') ? 'font-bold' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/blog" 
            className={`block text-[#B22222] hover:text-red-700 font-medium ${isActive('/blog') ? 'font-bold' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            className={`block text-[#B22222] hover:text-red-700 font-medium ${isActive('/about') ? 'font-bold' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <div className="pt-4 border-t">
            <button 
              onClick={() => {
                openCartModal()
                setIsMobileMenuOpen(false)
              }}
              className="block text-[#B22222] hover:underline font-medium"
            >
              Cart ({getCartItemsCount()})
            </button>
            <button className="block text-[#B22222] hover:underline font-medium">Login</button>
            <button className="block text-center bg-[#B22222] text-white py-2 mt-2 rounded hover:bg-red-900 transition w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}

      <CartModal isOpen={isCartModalOpen} onClose={closeCartModal} />
    </>
  )
}

export default Navbar
