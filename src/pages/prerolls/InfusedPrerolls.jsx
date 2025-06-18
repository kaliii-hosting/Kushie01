import { useEffect, useRef } from 'react'

function PrerollsInfused() {
  const pageRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const products = [
    {
      id: 1,
      name: "Diamond Dusted King",
      thc: "42%",
      price: "$30",
      size: "2g",
      infusion: "THCa Diamonds + Kief",
      strain: "King Louis XIII",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      name: "Liquid Gold Blunt",
      thc: "38%",
      price: "$35",
      size: "2.5g",
      infusion: "Distillate + Live Resin",
      strain: "Golden Goat",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      name: "Kief Coated Cannon",
      thc: "35%",
      price: "$20",
      size: "1.5g",
      infusion: "Triple Kief Layer",
      strain: "Blue Dream",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      name: "Live Resin Rocket",
      thc: "40%",
      price: "$28",
      size: "1.5g",
      infusion: "Live Resin Core",
      strain: "Sunset Sherbet",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 5,
      name: "Wax Wrapped Wonder",
      thc: "45%",
      price: "$32",
      size: "1.5g",
      infusion: "Wax Snake + Kief",
      strain: "GG#4",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 6,
      name: "Infused Variety Pack",
      thc: "38%",
      price: "$75",
      size: "5 x 0.7g",
      infusion: "Mixed Concentrates",
      strain: "Various",
      image: "https://via.placeholder.com/300x400"
    }
  ]

  return (
    <div ref={pageRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-500 text-center">
          Infused Prerolls
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Premium flower enhanced with concentrates, diamonds, and kief. 
          Our most potent preroll collection for the ultimate experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-2 text-center text-white font-bold text-sm">
                🔥 SUPER INFUSED 🔥
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
                    <span className="text-gray-400">Strain:</span>
                    <span className="text-white">{product.strain}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Infusion:</span>
                    <p className="text-orange-400 font-medium text-xs mt-1">{product.infusion}</p>
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

        <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/30">
          <h2 className="text-3xl font-semibold mb-6 text-white">Infusion Methods</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-3 text-orange-400">Interior Infusions</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Concentrate cores for even distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Wax snakes wrapped around the flower</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Diamond crystals mixed throughout</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-orange-400">Exterior Coatings</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Distillate glazing for smooth burns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Multiple layers of premium kief</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  <span>Terpene-enhanced outer coating</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-black/50 rounded-lg p-4 text-center">
            <p className="text-red-400 font-bold">⚠️ HIGH POTENCY WARNING</p>
            <p className="text-gray-300 text-sm mt-2">
              Infused prerolls are extremely potent. Start slow and share with friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrerollsInfused