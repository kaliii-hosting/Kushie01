import { useEffect, useRef } from 'react'

function DisposablesLiveResin() {
  const pageRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const products = [
    {
      id: 1,
      name: "Mimosa Live Resin",
      thc: "85%",
      price: "$45",
      strain: "Sativa",
      size: "1g",
      terpenes: "4.2%",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      name: "Ice Cream Cake Live Resin",
      thc: "84%",
      price: "$45",
      strain: "Indica",
      size: "1g",
      terpenes: "4.5%",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      name: "Sunset Sherbet Live Resin",
      thc: "86%",
      price: "$45",
      strain: "Hybrid",
      size: "1g",
      terpenes: "4.8%",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      name: "Lemon Haze Live Resin",
      thc: "87%",
      price: "$45",
      strain: "Sativa",
      size: "1g",
      terpenes: "5.1%",
      image: "https://via.placeholder.com/300x400"
    }
  ]

  return (
    <div ref={pageRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-500 text-center">
          Live Resin Disposables
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Full-spectrum live resin preserves the complete terpene profile 
          for authentic strain flavors and enhanced effects.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 text-center text-white font-bold text-sm">
                LIVE RESIN
              </div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div>
                    <span className="text-gray-400">THC:</span>
                    <span className="text-yellow-500 font-bold ml-1">{product.thc}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Type:</span>
                    <span className="text-white ml-1">{product.strain}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Size:</span>
                    <span className="text-white ml-1">{product.size}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Terps:</span>
                    <span className="text-green-500 font-bold ml-1">{product.terpenes}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-500">{product.price}</span>
                  <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-2xl p-8 border border-green-500/30">
          <h2 className="text-3xl font-semibold mb-6 text-white">The Live Resin Advantage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">❄️</div>
              <h3 className="text-lg font-medium text-green-500 mb-2">Flash Frozen</h3>
              <p className="text-gray-400 text-sm">
                Plants are frozen immediately after harvest to preserve terpenes
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌈</div>
              <h3 className="text-lg font-medium text-green-500 mb-2">Full Spectrum</h3>
              <p className="text-gray-400 text-sm">
                Contains the complete cannabinoid and terpene profile
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🍃</div>
              <h3 className="text-lg font-medium text-green-500 mb-2">True Flavor</h3>
              <p className="text-gray-400 text-sm">
                Experience the authentic taste of each strain
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisposablesLiveResin