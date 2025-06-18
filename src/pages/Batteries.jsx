import { useEffect, useRef } from 'react'

function Batteries() {
  const batteriesRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const batteryProducts = [
    {
      id: 1,
      name: "Kushie Pro Battery",
      price: "$39.99",
      features: ["Variable Voltage", "USB-C Charging", "510 Thread", "Preheat Function"],
      image: "https://via.placeholder.com/300x300"
    },
    {
      id: 2,
      name: "Kushie Slim Battery",
      price: "$24.99",
      features: ["Compact Design", "Auto-Draw", "Micro USB", "350mAh"],
      image: "https://via.placeholder.com/300x300"
    },
    {
      id: 3,
      name: "Kushie Max Battery",
      price: "$49.99",
      features: ["Digital Display", "1000mAh", "Magnetic Adapter", "Pass-Through Charging"],
      image: "https://via.placeholder.com/300x300"
    }
  ]

  return (
    <div ref={batteriesRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-neon-orange text-center">
          Premium Batteries
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Power your experience with Kushie Brand's premium battery collection. 
          Designed for reliability, performance, and style.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {batteryProducts.map((product) => (
            <div key={product.id} className="bg-gray-900/50 rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">{product.name}</h3>
              <p className="text-3xl font-bold text-neon-orange mb-4">{product.price}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-400 flex items-start">
                    <span className="text-neon-orange mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 bg-neon-orange text-white rounded-lg font-medium hover:bg-neon-orange-hover transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold mb-6 text-white text-center">Why Choose Kushie Batteries?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">Long Battery Life</h3>
              <p className="text-gray-400">
                High-capacity batteries that last all day
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">Safety Features</h3>
              <p className="text-gray-400">
                Built-in protections for safe operation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">Stylish Design</h3>
              <p className="text-gray-400">
                Sleek and discreet for any occasion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Batteries