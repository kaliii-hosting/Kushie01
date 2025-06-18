import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Cartridges() {
  const cartridgesRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const cartridgeTypes = [
    {
      name: "Distillate",
      path: "/cartridges/distillate",
      description: "Pure, potent distillate cartridges with natural terpenes",
      image: "https://via.placeholder.com/400x300"
    },
    {
      name: "Liquid Diamonds",
      path: "/cartridges/liquid-diamonds",
      description: "Premium liquid diamond cartridges for the ultimate experience",
      image: "https://via.placeholder.com/400x300"
    },
    {
      name: "Diamonds",
      path: "/cartridges/diamonds",
      description: "Pure THCa diamond cartridges with live resin terpenes",
      image: "https://via.placeholder.com/400x300"
    }
  ]

  return (
    <div ref={cartridgesRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-neon-orange text-center">
          Premium Cartridges
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Experience the finest cannabis extracts with Kushie Brand cartridges. 
          Lab-tested, premium quality, and available in your favorite strains.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cartridgeTypes.map((type) => (
            <Link 
              key={type.path}
              to={type.path} 
              className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 block"
            >
              <img 
                src={type.image} 
                alt={type.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-3">{type.name}</h2>
                <p className="text-gray-400 mb-4">{type.description}</p>
                <span className="text-neon-orange font-medium">
                  Explore Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gray-900/50 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold mb-6 text-white text-center">Why Choose Kushie Cartridges?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-lg font-medium text-white mb-2">Lab Tested</h3>
              <p className="text-gray-400 text-sm">
                Third-party tested for purity and potency
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-lg font-medium text-white mb-2">Premium Strains</h3>
              <p className="text-gray-400 text-sm">
                Curated selection of top-shelf strains
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-medium text-white mb-2">Hardware</h3>
              <p className="text-gray-400 text-sm">
                Premium ceramic coils for smooth hits
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-medium text-white mb-2">Consistency</h3>
              <p className="text-gray-400 text-sm">
                Same great quality every time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cartridges