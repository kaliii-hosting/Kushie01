import { useEffect, useRef } from 'react'

function PodsDistillate() {
  const pageRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const products = [
    {
      id: 1,
      name: "Gorilla Glue Distillate Pod",
      thc: "91%",
      price: "$40",
      strain: "Hybrid",
      size: "0.5g",
      compatibility: "Kushie Pod System",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      name: "Girl Scout Cookies Distillate Pod",
      thc: "92%",
      price: "$40",
      strain: "Hybrid",
      size: "0.5g",
      compatibility: "Kushie Pod System",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      name: "Northern Lights Distillate Pod",
      thc: "90%",
      price: "$40",
      strain: "Indica",
      size: "0.5g",
      compatibility: "Kushie Pod System",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      name: "Durban Poison Distillate Pod",
      thc: "93%",
      price: "$40",
      strain: "Sativa",
      size: "0.5g",
      compatibility: "Kushie Pod System",
      image: "https://via.placeholder.com/300x400"
    }
  ]

  return (
    <div ref={pageRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-500 text-center">
          Distillate Pods
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Premium distillate in our innovative pod system. Leak-proof, 
          consistent, and designed for optimal flavor delivery.
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
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <div className="space-y-1 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">THC:</span>
                    <span className="text-yellow-500 font-bold">{product.thc}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Type:</span>
                    <span className="text-white">{product.strain}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Size:</span>
                    <span className="text-white">{product.size}</span>
                  </div>
                  <div className="text-gray-400 text-xs mt-2">
                    {product.compatibility}
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
          <h2 className="text-3xl font-semibold mb-6 text-white">Why Choose Kushie Pods?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="text-lg font-medium text-yellow-500 mb-2">Secure Design</h3>
              <p className="text-gray-400 text-sm">
                Magnetic connection prevents leaks
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-medium text-yellow-500 mb-2">Precise Dosing</h3>
              <p className="text-gray-400 text-sm">
                Consistent vapor production
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌬️</div>
              <h3 className="text-lg font-medium text-yellow-500 mb-2">Smooth Airflow</h3>
              <p className="text-gray-400 text-sm">
                Optimized for perfect draws
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">♻️</div>
              <h3 className="text-lg font-medium text-yellow-500 mb-2">Eco-Conscious</h3>
              <p className="text-gray-400 text-sm">
                Recyclable pod materials
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PodsDistillate