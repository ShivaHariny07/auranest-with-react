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
      <nav className="sticky top-0 z-40 bg-white shadow-lg backdrop-blur-md bg-opacity-95">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/pictures/logo.jpg" 
                  alt="AuraNest Logo" 
                  className="w-12 h-12 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold text-gradient brand-name">
                AuraNest
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden space-x-8 md:flex">
              {[
                { path: '/', label: 'Home' },
                { path: '/shop', label: 'Shop' },
                { path: '/contact', label: 'Contact' },
                { path: '/blog', label: 'Blog' },
                { path: '/about', label: 'About' }
              ].map(({ path, label }) => (
                <Link 
                  key={path}
                  to={path} 
                  className={`relative font-semibold transition-all duration-200 hover:text-red-600 ${
                    isActive(path) 
                      ? 'text-red-600' 
                      : 'text-gray-700'
                  }`}
                >
                  {label}
                  {isActive(path) && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="items-center hidden space-x-4 md:flex">
              <button 
                onClick={openCartModal}
                className="relative p-2 text-gray-700 transition-all duration-200 rounded-lg hover:bg-red-50 hover:text-red-600 group"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"></path>
                </svg>
                {getCartItemsCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {getCartItemsCount()}
                  </span>
                )}
              </button>
              
              <button className="btn-ghost">
                Sign In
              </button>
              
              <button className="btn-primary">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 transition-colors duration-200 rounded-lg md:hidden hover:bg-gray-100"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-4 space-y-3 bg-white border-t border-gray-100">
            {[
              { path: '/', label: 'Home' },
              { path: '/shop', label: 'Shop' },
              { path: '/contact', label: 'Contact' },
              { path: '/blog', label: 'Blog' },
              { path: '/about', label: 'About' }
            ].map(({ path, label }) => (
              <Link 
                key={path}
                to={path} 
                className={`block py-2 px-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive(path) 
                    ? 'bg-red-50 text-red-600 font-semibold' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            
            <div className="pt-4 border-t border-gray-100">
              <button 
                onClick={() => {
                  openCartModal()
                  setIsMobileMenuOpen(false)
                }}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
              >
                <span>Cart</span>
                <span className="bg-red-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              </button>
              
              <div className="flex space-x-3 mt-4">
                <button className="flex-1 btn-ghost text-center">
                  Sign In
                </button>
                <button className="flex-1 btn-primary text-center">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <CartModal isOpen={isCartModalOpen} onClose={closeCartModal} />
    </>
  )
}

export default Navbar