import { useEffect, useRef } from 'react'

function CartridgesDistillate() {
  const pageRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const products = [
    {
      id: 1,
      name: "OG Kush Distillate",
      thc: "92%",
      price: "$45",
      strain: "Indica",
      effects: "Relaxing, Euphoric, Happy",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      name: "Blue Dream Distillate",
      thc: "91%",
      price: "$45",
      strain: "Hybrid",
      effects: "Creative, Uplifting, Focused",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      name: "Sour Diesel Distillate",
      thc: "93%",
      price: "$45",
      strain: "Sativa",
      effects: "Energetic, Happy, Focused",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      name: "Gelato Distillate",
      thc: "90%",
      price: "$45",
      strain: "Hybrid",
      effects: "Relaxing, Happy, Euphoric",
      image: "https://via.placeholder.com/300x400"
    }
  ]

  return (
    <div ref={pageRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-500 text-center">
          Distillate Cartridges
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Pure THC distillate enhanced with strain-specific terpenes. 
          Experience clean, potent effects with every pull.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
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
          <h2 className="text-3xl font-semibold mb-6 text-white">About Our Distillate</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3 text-yellow-500">Extraction Process</h3>
              <p className="text-gray-400">
                Our distillate is refined through a multi-step process that removes all 
                impurities while preserving the pure THC. We then reintroduce premium 
                terpenes for authentic strain flavors and effects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-yellow-500">Quality Standards</h3>
              <p className="text-gray-400">
                Every batch is third-party tested for potency, pesticides, heavy metals, 
                and microbials. We guarantee consistency and purity in every cartridge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartridgesDistillate