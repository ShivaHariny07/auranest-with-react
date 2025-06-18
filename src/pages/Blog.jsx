import React from 'react'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Sunscreen Mistakes You're Probably Making",
      category: "SKINCARE",
      date: "January 12, 2025",
      image: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg",
      excerpt: "Learn about the most common sunscreen application errors and how to protect your skin properly."
    },
    {
      id: 2,
      title: "2025 Makeup Trends You Need to Try",
      category: "MAKEUP",
      date: "January 10, 2025",
      image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg",
      excerpt: "From bold lips to natural glows, discover the hottest makeup trends taking over this year."
    },
    {
      id: 3,
      title: "The Complete Guide to Face Serums",
      category: "SKINCARE",
      date: "January 8, 2025",
      image: "https://images.pexels.com/photos/3762882/pexels-photo-3762882.jpeg",
      excerpt: "Everything you need to know about incorporating serums into your skincare routine for maximum benefits."
    },
    {
      id: 4,
      title: "How to Choose the Perfect Foundation Shade",
      category: "MAKEUP",
      date: "January 5, 2025",
      image: "https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg",
      excerpt: "Master the art of finding your perfect foundation match with our expert tips and tricks."
    },
    {
      id: 5,
      title: "Winter Moisturizing: Keep Your Skin Hydrated",
      category: "SKINCARE",
      date: "January 3, 2025",
      image: "https://images.pexels.com/photos/3762873/pexels-photo-3762873.jpeg",
      excerpt: "Combat dry winter skin with the right moisturizing techniques and products for your skin type."
    },
    {
      id: 6,
      title: "Essential Lip Care for Every Season",
      category: "LIP CARE",
      date: "January 1, 2025",
      image: "https://images.pexels.com/photos/3373748/pexels-photo-3373748.jpeg",
      excerpt: "Keep your lips soft, smooth, and healthy year-round with our comprehensive lip care guide."
    }
  ]

  return (
    <div className="bg-gray-50">
      <Navbar />

      <div className="container px-4 py-8 mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">Beauty & Skincare Blog</h1>
          <p className="max-w-2xl mx-auto text-gray-600">Discover the latest tips, trends, and expert advice for your beauty routine</p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="overflow-hidden bg-white rounded-lg shadow-lg">
            <img src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg" alt="Featured Article" className="object-cover w-full h-64" />
            <div className="p-8">
              <span className="text-[#B22222] text-sm font-semibold">FEATURED</span>
              <h2 className="mt-2 mb-4 text-3xl font-bold text-gray-800">The Ultimate Guide to Building Your Perfect Skincare Routine</h2>
              <p className="mb-4 text-gray-600">Discover how to create a personalized skincare routine that works for your unique skin type and concerns. From cleansing to moisturizing, we cover everything you need to know.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">January 15, 2025</span>
                <button className="text-[#B22222] font-semibold hover:underline">Read More →</button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => (
            <article key={post.id} className="overflow-hidden bg-white rounded-lg shadow-md blog-card">
              <img src={post.image} alt={post.title} className="object-cover w-full h-48" />
              <div className="p-6">
                <span className="text-[#B22222] text-sm font-semibold">{post.category}</span>
                <h3 className="mt-2 mb-3 text-xl font-bold text-gray-800">{post.title}</h3>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="text-[#B22222] font-semibold hover:underline">Read More</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-[#B22222] text-white rounded-lg p-8 mt-12 text-center">
          <h3 className="mb-4 text-2xl font-bold">Stay Updated with Beauty Tips</h3>
          <p className="mb-6">Subscribe to our newsletter for the latest beauty trends, product reviews, and exclusive tips.</p>
          <div className="flex flex-col max-w-md gap-4 mx-auto sm:flex-row">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 text-gray-800 rounded" />
            <button className="bg-white text-[#B22222] px-6 py-2 rounded font-semibold hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blog