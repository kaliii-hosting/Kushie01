import { useEffect, useRef } from 'react'

function DisposablesDiamonds() {
  const pageRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const products = [
    {
      id: 1,
      name: "Pink Runtz Diamonds",
      thc: "96%",
      price: "$60",
      strain: "Hybrid",
      size: "1g",
      crystals: "THCa Diamonds",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      name: "Biscotti Diamonds",
      thc: "95%",
      price: "$60",
      strain: "Indica",
      size: "1g",
      crystals: "THCa Diamonds",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      name: "Super Lemon Haze Diamonds",
      thc: "97%",
      price: "$60",
      strain: "Sativa",
      size: "1g",
      crystals: "THCa Diamonds",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      name: "Cookies & Cream Diamonds",
      thc: "96%",
      price: "$60",
      strain: "Hybrid",
      size: "1g",
      crystals: "THCa Diamonds",
      image: "https://via.placeholder.com/300x400"
    }
  ]

  return (
    <div ref={pageRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-500 text-center">
          Diamond Disposables
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          The ultimate in potency and convenience. THCa diamonds in a 
          rechargeable disposable format.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 text-center text-white font-bold text-sm animate-pulse">
                💎 DIAMOND INFUSED 💎
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
                    <span className="text-gray-400">Extract:</span>
                    <span className="text-purple-400 font-bold ml-1">{product.crystals}</span>
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
          <h2 className="text-3xl font-semibold mb-6 text-white text-center">Diamond Disposable Technology</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-3 text-purple-400">Advanced Heating System</h3>
              <p className="text-gray-400">
                Our proprietary heating technology ensures THCa diamonds are vaporized 
                at the perfect temperature, preserving potency while delivering smooth hits.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-purple-400">Premium Hardware</h3>
              <p className="text-gray-400">
                Featuring ceramic coils and glass chambers specifically designed for 
                high-potency extracts, ensuring clean flavor and consistent performance.
              </p>
            </div>
          </div>
          <div className="bg-black/50 rounded-lg p-4 text-center">
            <p className="text-yellow-500 font-semibold">⚡ EXTREME POTENCY WARNING ⚡</p>
            <p className="text-gray-400 text-sm mt-2">
              Diamond disposables are our most potent products. Start with one small puff and wait 10-15 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisposablesDiamonds