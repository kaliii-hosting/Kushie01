import { useEffect, useRef } from 'react'

function PrerollsHashInfused() {
  const pageRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const products = [
    {
      id: 1,
      name: "OG Kush x Bubble Hash",
      thc: "35%",
      price: "$25",
      size: "1.5g",
      flower: "OG Kush",
      hash: "Bubble Hash",
      pack: "Single",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      name: "Gelato x Ice Water Hash",
      thc: "38%",
      price: "$25",
      size: "1.5g",
      flower: "Gelato #33",
      hash: "Ice Water Hash",
      pack: "Single",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      name: "Wedding Cake x Rosin",
      thc: "40%",
      price: "$30",
      size: "1.5g",
      flower: "Wedding Cake",
      hash: "Live Rosin",
      pack: "Single",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      name: "Hash Infused 3-Pack",
      thc: "36%",
      price: "$60",
      size: "3 x 1g",
      flower: "Mixed Strains",
      hash: "Premium Hash Blend",
      pack: "3-Pack",
      image: "https://via.placeholder.com/300x400"
    }
  ]

  return (
    <div ref={pageRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-500 text-center">
          Hash Infused Prerolls
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Premium flower enhanced with solventless hash for a smooth, 
          potent experience. Hand-rolled to perfection.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-2 text-center text-white font-bold text-sm">
                HASH INFUSED
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
                    <span className="text-gray-400">Size:</span>
                    <span className="text-white">{product.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Flower:</span>
                    <span className="text-white">{product.flower}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Hash:</span>
                    <span className="text-amber-500">{product.hash}</span>
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

        <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/20 rounded-2xl p-8 border border-amber-500/30">
          <h2 className="text-3xl font-semibold mb-6 text-white">The Art of Hash Infusion</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🧊</div>
              <h3 className="text-lg font-medium text-amber-500 mb-2">Solventless Hash</h3>
              <p className="text-gray-400 text-sm">
                Pure ice water extraction preserves terpenes and potency
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-lg font-medium text-amber-500 mb-2">Premium Flower</h3>
              <p className="text-gray-400 text-sm">
                Top-shelf buds provide the perfect base for infusion
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="text-lg font-medium text-amber-500 mb-2">Slow Burning</h3>
              <p className="text-gray-400 text-sm">
                Hash creates an even burn for extended sessions
              </p>
            </div>
          </div>
          <div className="mt-8 bg-black/30 rounded-lg p-4 text-center">
            <p className="text-amber-400 font-semibold">Pro Tip:</p>
            <p className="text-gray-300 text-sm mt-2">
              Hash infused prerolls burn slower than regular joints. Take your time and enjoy the enhanced flavor profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrerollsHashInfused