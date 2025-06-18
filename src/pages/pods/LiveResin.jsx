import { useEffect, useRef } from 'react'

function PodsLiveResin() {
  const pageRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const products = [
    {
      id: 1,
      name: "Tropicana Cookies Live Resin Pod",
      thc: "82%",
      price: "$50",
      strain: "Sativa",
      size: "0.5g",
      terpenes: "5.2%",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      name: "Forbidden Fruit Live Resin Pod",
      thc: "83%",
      price: "$50",
      strain: "Indica",
      size: "0.5g",
      terpenes: "4.8%",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      name: "Tangie Live Resin Pod",
      thc: "84%",
      price: "$50",
      strain: "Sativa",
      size: "0.5g",
      terpenes: "5.5%",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      name: "Cherry Pie Live Resin Pod",
      thc: "81%",
      price: "$50",
      strain: "Hybrid",
      size: "0.5g",
      terpenes: "4.9%",
      image: "https://via.placeholder.com/300x400"
    }
  ]

  return (
    <div ref={pageRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-500 text-center">
          Live Resin Pods
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Experience the full terpene profile of fresh-frozen cannabis 
          in our advanced pod system.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 text-center text-white font-bold text-sm">
                LIVE RESIN • FULL SPECTRUM
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
                    <span className="text-gray-400">Terpenes:</span>
                    <span className="text-green-500 font-bold">{product.terpenes}</span>
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
                  <button className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl p-8 border border-green-500/30">
          <h2 className="text-3xl font-semibold mb-6 text-white">Live Resin Pod Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3 text-green-500">Entourage Effect</h3>
              <p className="text-gray-400">
                Full-spectrum extract preserves minor cannabinoids and terpenes, 
                creating a synergistic effect that enhances the overall experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-green-500">Strain-Specific</h3>
              <p className="text-gray-400">
                Each pod captures the unique characteristics of its source strain, 
                delivering authentic effects and flavors true to the plant.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3 text-green-500">Fresh Preservation</h3>
              <p className="text-gray-400">
                Flash-freezing at harvest locks in volatile terpenes that would 
                normally be lost during traditional drying and curing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PodsLiveResin