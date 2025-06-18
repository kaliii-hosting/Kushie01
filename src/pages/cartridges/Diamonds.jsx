import { useEffect, useRef } from 'react'

function CartridgesDiamonds() {
  const pageRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const products = [
    {
      id: 1,
      name: "Runtz Diamonds",
      thc: "98%",
      price: "$75",
      strain: "Hybrid",
      effects: "Euphoric, Uplifting, Relaxing",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      name: "Purple Punch Diamonds",
      thc: "97%",
      price: "$75",
      strain: "Indica",
      effects: "Sedating, Relaxing, Happy",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      name: "Green Crack Diamonds",
      thc: "98%",
      price: "$75",
      strain: "Sativa",
      effects: "Energetic, Focused, Creative",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      name: "MAC 1 Diamonds",
      thc: "99%",
      price: "$75",
      strain: "Hybrid",
      effects: "Balanced, Happy, Creative",
      image: "https://via.placeholder.com/300x400"
    }
  ]

  return (
    <div ref={pageRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-500 text-center">
          Diamond Cartridges
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Pure crystalline THCa diamonds combined with premium terpenes. 
          The ultimate expression of cannabis potency and purity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 text-center text-white font-bold text-sm">
                ULTRA PREMIUM
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

        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-500/30">
          <h2 className="text-3xl font-semibold mb-6 text-white text-center">The Diamond Standard</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-medium mb-3 text-yellow-500">What Are THCa Diamonds?</h3>
              <p className="text-gray-400">
                THCa diamonds are the purest form of cannabis concentrate, consisting of 
                99%+ pure crystalline THCa. When heated, THCa converts to THC, delivering 
                an incredibly potent and clean experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-yellow-500">Our Process</h3>
              <p className="text-gray-400">
                We use advanced extraction techniques to isolate pure THCa crystals, 
                then carefully reintroduce strain-specific terpenes to create a 
                full-spectrum experience with maximum potency.
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-yellow-500 font-semibold mb-2">⚠️ For Experienced Users Only</p>
            <p className="text-gray-400 text-sm">
              Diamond cartridges are extremely potent. Start with small doses and wait for effects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartridgesDiamonds