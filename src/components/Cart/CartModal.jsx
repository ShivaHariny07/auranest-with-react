
import React from 'react'
import { useCart } from '../../context/CartContext'

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md p-6 bg-white rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold">Shopping Cart</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="mb-4 space-y-4 overflow-y-auto max-h-96">
            {cart.length === 0 ? (
              <p className="py-4 text-center text-gray-500">Your cart is empty</p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex items-center justify-between pb-2 border-b">
                  <div className="flex items-center space-x-3">
                    <img src={item.image} alt={item.name} className="object-cover w-12 h-12 rounded" />
                    <div>
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                      <p className="text-xs text-gray-500">₹{item.price} each</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                      </svg>
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                    </button>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {cart.length > 0 && (
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold">Total: ₹{getCartTotal()}</span>
              </div>
              <button className="w-full bg-[#B22222] text-white py-2 rounded hover:bg-red-700 transition">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartModal