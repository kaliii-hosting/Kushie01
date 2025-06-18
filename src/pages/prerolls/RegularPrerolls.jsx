import { useEffect, useRef } from 'react'

function PrerollsRegular() {
  const pageRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const products = [
    {
      id: 1,
      name: "OG Kush Classic",
      thc: "24%",
      price: "$12",
      size: "1g",
      type: "Single",
      strain: "Indica",
      grind: "Medium",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      name: "Sour Diesel Single",
      thc: "22%",
      price: "$12",
      size: "1g",
      type: "Single",
      strain: "Sativa",
      grind: "Medium",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      name: "Blue Dream 3-Pack",
      thc: "21%",
      price: "$30",
      size: "3 x 0.7g",
      type: "3-Pack",
      strain: "Hybrid",
      grind: "Fine",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      name: "Indica 5-Pack",
      thc: "23%",
      price: "$45",
      size: "5 x 0.7g",
      type: "5-Pack",
      strain: "Indica Mix",
      grind: "Medium",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 5,
      name: "Sativa 5-Pack",
      thc: "22%",
      price: "$45",
      size: "5 x 0.7g",
      type: "5-Pack",
      strain: "Sativa Mix",
      grind: "Medium",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 6,
      name: "Mini Dogs 10-Pack",
      thc: "20%",
      price: "$35",
      size: "10 x 0.35g",
      type: "10-Pack",
      strain: "Hybrid Mix",
      grind: "Fine",
      image: "https://via.placeholder.com/300x400"
    }
  ]

  return (
    <div ref={pageRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-500 text-center">
          Classic Prerolls
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Premium flower, perfectly rolled. No additives, just pure cannabis 
          in its finest form. Available in singles and multi-packs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
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
                    <span className="text-gray-400">Pack:</span>
                    <span className="text-white ml-1">{product.type}</span>
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

        <div className="bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold mb-6 text-white">Why Choose Kushie Prerolls?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-lg font-medium text-yellow-500 mb-2">Premium Flower</h3>
              <p className="text-gray-400 text-sm">
                Only whole buds, never shake or trim
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📏</div>
              <h3 className="text-lg font-medium text-yellow-500 mb-2">Perfect Roll</h3>
              <p className="text-gray-400 text-sm">
                Consistent density for even burning
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-lg font-medium text-yellow-500 mb-2">Fresh Sealed</h3>
              <p className="text-gray-400 text-sm">
                Humidity-controlled packaging
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-medium text-yellow-500 mb-2">Strain Variety</h3>
              <p className="text-gray-400 text-sm">
                Rotating selection of top strains
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">
              All prerolls are hand-inspected and come with humidity packs to ensure freshness
            </p>
            <div className="inline-flex gap-4">
              <span className="px-4 py-2 bg-black/50 rounded-lg text-yellow-500 font-medium">
                🔥 Slow Burn Paper
              </span>
              <span className="px-4 py-2 bg-black/50 rounded-lg text-yellow-500 font-medium">
                🌿 Crutch Filter Included
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrerollsRegular