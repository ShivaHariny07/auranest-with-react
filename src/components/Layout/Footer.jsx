import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="py-8 mt-16 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center mb-4 space-x-3">
              <img src="/pictures/logo.jpg" alt="Logo" className="w-auto h-10 rounded-lg" />
              <span className="text-xl font-bold brand-name">AuraNest</span>
            </div>
            <p className="text-gray-400">Your trusted partner for premium beauty and skincare products.</p>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/category?category=serum" className="text-gray-400 hover:text-white">Skincare</Link></li>
              <li><Link to="/category?category=foundation" className="text-gray-400 hover:text-white">Makeup</Link></li>
              <li><Link to="/category?category=lipbalm" className="text-gray-400 hover:text-white">Lip Care</Link></li>
              <li><Link to="/category?category=sunscreen" className="text-gray-400 hover:text-white">Sun Protection</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Contact Info</h4>
            <p className="mb-2 text-gray-400">Email: info@auranest.shop</p>
            <p className="mb-2 text-gray-400">Phone: +91 12345 67890</p>
            <p className="text-gray-400">Address: Mumbai, India</p>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p className="text-gray-400">&copy; 2025 AuraNest.shop. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer