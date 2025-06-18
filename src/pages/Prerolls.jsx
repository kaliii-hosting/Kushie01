import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Prerolls() {
  const prerollsRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const prerollTypes = [
    {
      name: "Hash Infused",
      path: "/prerolls/hash-infused",
      description: "Premium flower infused with solventless hash for elevated potency",
      image: "https://via.placeholder.com/400x300"
    },
    {
      name: "Infused Prerolls",
      path: "/prerolls/infused",
      description: "Flower enhanced with concentrates and kief for maximum effect",
      image: "https://via.placeholder.com/400x300"
    },
    {
      name: "Regular Prerolls",
      path: "/prerolls/regular",
      description: "Classic prerolls with top-shelf flower, perfectly rolled",
      image: "https://via.placeholder.com/400x300"
    }
  ]

  return (
    <div ref={prerollsRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-neon-orange text-center">
          Premium Prerolls
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Hand-rolled perfection using only the finest cannabis flower. 
          From classic joints to hash-infused masterpieces.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prerollTypes.map((type) => (
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
          <h2 className="text-3xl font-semibold mb-6 text-white text-center">The Kushie Difference</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-lg font-medium text-white mb-2">Premium Flower</h3>
              <p className="text-gray-400 text-sm">
                Only top-shelf, hand-selected buds
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="text-lg font-medium text-white mb-2">Slow Burn</h3>
              <p className="text-gray-400 text-sm">
                Perfectly cured for even burning
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="text-lg font-medium text-white mb-2">Fresh Packed</h3>
              <p className="text-gray-400 text-sm">
                Sealed for maximum freshness
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✋</div>
              <h3 className="text-lg font-medium text-white mb-2">Hand Rolled</h3>
              <p className="text-gray-400 text-sm">
                Artisan crafted, never machine made
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prerolls