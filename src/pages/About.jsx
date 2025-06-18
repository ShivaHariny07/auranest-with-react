import React from 'react'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

const About = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#B22222] to-red-600 text-white py-16">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold">About AuraNest</h1>
          <p className="max-w-3xl mx-auto text-xl">Empowering beauty through premium skincare and cosmetics since 2020</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800">Our Story</h2>
              <p className="mb-4 text-gray-600">
                Founded in 2020, AuraNest began as a passion project to make premium beauty and skincare products accessible to everyone. We believe that everyone deserves to feel confident and beautiful in their own skin.
              </p>
              <p className="mb-4 text-gray-600">
                Our journey started with a simple mission: to curate the finest beauty products from around the world and bring them directly to your doorstep. Today, we're proud to serve thousands of customers across India with our carefully selected range of skincare, makeup, and beauty essentials.
              </p>
              <p className="text-gray-600">
                At AuraNest, we're not just selling products – we're building a community of beauty enthusiasts who share our passion for quality, authenticity, and self-expression.
              </p>
            </div>
            <div>
              <img src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg" alt="Our Story" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="bg-[#B22222] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Quality First</h3>
              <p className="text-gray-600">We source only the highest quality products from trusted brands and manufacturers worldwide.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#B22222] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Customer Love</h3>
              <p className="text-gray-600">Our customers are at the heart of everything we do. Your satisfaction is our top priority.</p>
            </div>
            <div className="text-center">
              <div className="bg-[#B22222] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-800">Sustainability</h3>
              <p className="text-gray-600">We're committed to eco-friendly practices and supporting brands that care about our planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="overflow-hidden bg-white rounded-lg shadow-lg team-card">
              <img src="https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg" alt="Priya Sharma" className="object-cover w-full h-64" />
              <div className="p-6 text-center">
                <h3 className="mb-2 text-xl font-bold text-gray-800">Priya Sharma</h3>
                <p className="text-[#B22222] font-semibold mb-3">Founder & CEO</p>
                <p className="text-sm text-gray-600">Beauty enthusiast with 10+ years in the cosmetics industry, passionate about bringing quality products to everyone.</p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-lg shadow-lg team-card">
              <img src="https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg" alt="Rahul Patel" className="object-cover w-full h-64" />
              <div className="p-6 text-center">
                <h3 className="mb-2 text-xl font-bold text-gray-800">Rahul Patel</h3>
                <p className="text-[#B22222] font-semibold mb-3">Head of Operations</p>
                <p className="text-sm text-gray-600">Ensures smooth operations and timely delivery of products to our valued customers across India.</p>
              </div>
            </div>
            <div className="overflow-hidden bg-white rounded-lg shadow-lg team-card">
              <img src="https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg" alt="Anita Singh" className="object-cover w-full h-64" />
              <div className="p-6 text-center">
                <h3 className="mb-2 text-xl font-bold text-gray-800">Anita Singh</h3>
                <p className="text-[#B22222] font-semibold mb-3">Beauty Consultant</p>
                <p className="text-sm text-gray-600">Licensed cosmetologist helping customers find the perfect products for their unique skin needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-[#B22222] text-white py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold">50K+</div>
              <div className="text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">500+</div>
              <div className="text-lg">Products</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">50+</div>
              <div className="text-lg">Brands</div>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold">5</div>
              <div className="text-lg">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                To democratize beauty by making premium skincare and cosmetic products accessible, affordable, and authentic for everyone. We strive to empower individuals to express their unique beauty while maintaining the highest standards of quality and customer service.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Our Vision</h3>
              <p className="text-gray-600">
                To become India's most trusted and beloved beauty destination, known for our curated selection, expert guidance, and unwavering commitment to customer satisfaction. We envision a world where everyone feels confident and beautiful in their own skin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About