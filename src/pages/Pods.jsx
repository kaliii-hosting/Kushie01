import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Pods() {
  const podsRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const podTypes = [
    {
      name: "Distillate",
      path: "/pods/distillate",
      description: "High-purity distillate pods for consistent effects",
      image: "https://via.placeholder.com/400x300"
    },
    {
      name: "Live Resin",
      path: "/pods/live-resin",
      description: "Fresh-frozen live resin pods with natural terpenes",
      image: "https://via.placeholder.com/400x300"
    },
    {
      name: "Diamonds",
      path: "/pods/diamonds",
      description: "Ultra-premium diamond pods for experienced users",
      image: "https://via.placeholder.com/400x300"
    }
  ]

  return (
    <div ref={podsRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-neon-orange text-center">
          Pod Systems
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Advanced pod system technology meets premium cannabis extracts. 
          Compatible with Kushie Pod devices for the ultimate vaping experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {podTypes.map((type) => (
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
          <h2 className="text-3xl font-semibold mb-6 text-white text-center">Pod System Advantages</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-medium text-white mb-2">Precision Dosing</h3>
              <p className="text-gray-400 text-sm">
                Consistent doses every time
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-lg font-medium text-white mb-2">Leak-Proof</h3>
              <p className="text-gray-400 text-sm">
                Advanced sealing technology
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">♻️</div>
              <h3 className="text-lg font-medium text-white mb-2">Eco-Friendly</h3>
              <p className="text-gray-400 text-sm">
                Reusable device, replaceable pods
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-lg font-medium text-white mb-2">Fast Acting</h3>
              <p className="text-gray-400 text-sm">
                Instant vapor production
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pods