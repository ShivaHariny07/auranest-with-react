import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Category from './pages/Category'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/category" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App