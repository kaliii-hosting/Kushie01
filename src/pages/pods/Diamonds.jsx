import { useEffect, useRef } from 'react'

function PodsDiamonds() {
  const pageRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const products = [
    {
      id: 1,
      name: "Zkittlez Diamond Pod",
      thc: "94%",
      price: "$65",
      strain: "Indica",
      size: "0.5g",
      crystals: "99% THCa",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      name: "Mimosa Diamond Pod",
      thc: "95%",
      price: "$65",
      strain: "Sativa",
      size: "0.5g",
      crystals: "99% THCa",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      name: "Wedding Crasher Diamond Pod",
      thc: "93%",
      price: "$65",
      strain: "Hybrid",
      size: "0.5g",
      crystals: "99% THCa",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      name: "Purple Punch Diamond Pod",
      thc: "94%",
      price: "$65",
      strain: "Indica",
      size: "0.5g",
      crystals: "99% THCa",
      image: "https://via.placeholder.com/300x400"
    }
  ]

  return (
    <div ref={pageRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-500 text-center">
          Diamond Pods
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          The pinnacle of pod technology meets the purity of THCa diamonds. 
          Unmatched potency in a convenient format.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 p-2 text-center text-white font-bold text-sm animate-shimmer">
                💎 DIAMOND SERIES 💎
              </div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <div className="space-y-1 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">THC:</span>
                    <span className="text-yellow-500 font-bold">{product.thc}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Purity:</span>
                    <span className="text-purple-400 font-bold">{product.crystals}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Type:</span>
                    <span className="text-white">{product.strain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Size:</span>
                    <span className="text-white">{product.size}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-500">{product.price}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/30">
          <h2 className="text-3xl font-semibold mb-6 text-white text-center">Diamond Pod Technology</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3 text-purple-400">Precision Temperature Control</h3>
              <p className="text-gray-400">
                Our diamond pods feature advanced heating elements that maintain the exact 
                temperature needed to vaporize THCa crystals without degradation, ensuring 
                maximum potency and flavor preservation.
              </p>
            </div>
            <div className="bg-black/30 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-3 text-purple-400">Triple-Filtered Vapor Path</h3>
              <p className="text-gray-400">
                Each pod incorporates a triple-filtration system that cools and smooths 
                the vapor, making even the most potent hits comfortable while maintaining 
                the full terpene profile.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-block bg-black/50 rounded-lg p-4">
              <p className="text-yellow-500 font-bold text-lg mb-2">⚡ EXTREME POTENCY ⚡</p>
              <p className="text-gray-300">Recommended for experienced users only</p>
              <p className="text-gray-400 text-sm mt-2">Start with one small puff and wait 15-20 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PodsDiamonds