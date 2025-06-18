import { useEffect, useRef } from 'react'

function News() {
  const newsRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const newsItems = [
    {
      id: 1,
      title: "Kushie Brand Launches New Diamond Collection",
      date: "December 15, 2024",
      excerpt: "Experience the pinnacle of cannabis extraction with our new Diamond collection, featuring 99% pure THCa crystals.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 2,
      title: "Opening New Flagship Store in Beverly Hills",
      date: "December 10, 2024",
      excerpt: "We're excited to announce our newest location in the heart of Beverly Hills, opening January 2025.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      id: 3,
      title: "Sustainability Initiative: Zero Waste by 2025",
      date: "December 5, 2024",
      excerpt: "Kushie Brand commits to achieving zero waste production by 2025 with new eco-friendly packaging.",
      image: "https://via.placeholder.com/400x250"
    }
  ]

  return (
    <div ref={newsRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-neon-orange text-center">
          Latest News
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Stay updated with the latest from Kushie Brand - new product launches, 
          events, and industry insights.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-neon-orange text-sm mb-2">{item.date}</p>
                <h2 className="text-2xl font-semibold text-white mb-3">{item.title}</h2>
                <p className="text-gray-400 mb-4">{item.excerpt}</p>
                <button className="text-neon-orange hover:text-neon-orange-hover font-medium">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gray-900/50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mb-6">
            Get the latest news and exclusive offers delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-neon-orange focus:outline-none"
            />
            <button className="px-6 py-2 bg-neon-orange text-white rounded-lg font-medium hover:bg-neon-orange-hover transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News