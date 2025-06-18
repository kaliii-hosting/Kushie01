import { useEffect, useRef } from 'react'

function CartridgesLiquidDiamonds() {
  const pageRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const products = [
    {
      id: 1,
      name: "Wedding Cake Liquid Diamonds",
      thc: "95%",
      price: "$65",
      strain: "Hybrid",
      effects: "Euphoric, Relaxing, Happy",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      name: "Zkittlez Liquid Diamonds",
      thc: "94%",
      price: "$65",
      strain: "Indica",
      effects: "Calming, Happy, Sleepy",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      name: "Jack Herer Liquid Diamonds",
      thc: "96%",
      price: "$65",
      strain: "Sativa",
      effects: "Energetic, Creative, Focused",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      name: "GMO Liquid Diamonds",
      thc: "97%",
      price: "$65",
      strain: "Indica",
      effects: "Relaxing, Sedating, Euphoric",
      image: "https://via.placeholder.com/300x400"
    }
  ]

  return (
    <div ref={pageRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-500 text-center">
          Liquid Diamond Cartridges
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          The pinnacle of cannabis extraction. Liquid diamonds combine THCa crystals 
          with live resin terpenes for unmatched potency and flavor.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-2 text-center text-black font-bold text-sm">
                PREMIUM COLLECTION
              </div>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                  <span className="text-yellow-500 font-bold">{product.thc}</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{product.strain}</p>
                <p className="text-sm text-gray-300 mb-4">{product.effects}</p>
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

        <div className="bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold mb-6 text-white">The Liquid Diamond Difference</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-medium mb-2 text-yellow-500">Pure THCa Crystals</h3>
              <p className="text-gray-400 text-sm">
                99.9% pure THCa diamonds melted into liquid form
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-medium mb-2 text-yellow-500">Live Resin Terps</h3>
              <p className="text-gray-400 text-sm">
                Flash-frozen terpenes preserve the plant's true essence
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-medium mb-2 text-yellow-500">Extreme Potency</h3>
              <p className="text-gray-400 text-sm">
                Our most potent cartridges for experienced users
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartridgesLiquidDiamonds