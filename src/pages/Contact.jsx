import React, { useState } from 'react'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "We offer free standard shipping on orders over ₹1000. Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unopened products in original packaging. Beauty products must be unused for hygiene reasons."
    },
    {
      question: "Do you offer product samples?",
      answer: "Yes! We offer free samples with every order. You can also request specific samples when placing your order."
    }
  ]

  return (
    <div className="bg-gray-50">
      <Navbar />

      <div className="container px-4 py-8 mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Get in Touch</h1>
          <p className="max-w-2xl mx-auto text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B22222] focus:border-transparent" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B22222] focus:border-transparent" required />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B22222] focus:border-transparent" required />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B22222] focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                <select id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B22222] focus:border-transparent" required>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="order">Order Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B22222] focus:border-transparent" placeholder="Tell us how we can help you..." required></textarea>
              </div>
              <button type="submit" className="w-full bg-[#B22222] text-white py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300 font-semibold">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-6 bg-white rounded-lg shadow-lg contact-card">
              <div className="flex items-center mb-4">
                <div className="bg-[#B22222] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-800">Visit Our Store</h3>
              </div>
              <p className="text-gray-600">123 Beauty Street, Fashion District<br />Mumbai, Maharashtra 400001<br />India</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg contact-card">
              <div className="flex items-center mb-4">
                <div className="bg-[#B22222] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-800">Call Us</h3>
              </div>
              <p className="text-gray-600">Phone: +91 12345 67890<br />Toll Free: 1800-123-4567<br />Mon-Sat: 9:00 AM - 8:00 PM</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg contact-card">
              <div className="flex items-center mb-4">
                <div className="bg-[#B22222] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-800">Email Us</h3>
              </div>
              <p className="text-gray-600">General: info@auranest.shop<br />Support: support@auranest.shop<br />Business: business@auranest.shop</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-lg contact-card">
              <div className="flex items-center mb-4">
                <div className="bg-[#B22222] p-3 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-800">Business Hours</h3>
              </div>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 8:00 PM<br />Saturday: 10:00 AM - 6:00 PM<br />Sunday: 11:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <button 
                  className="w-full px-6 py-4 font-semibold text-left text-gray-800 hover:bg-gray-50 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="float-right">{openFAQ === index ? '-' : '+'}</span>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact