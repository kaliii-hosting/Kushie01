import { useEffect, useRef } from 'react'

function Merch() {
  const merchRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const merchItems = [
    {
      id: 1,
      name: "Kushie Classic Tee",
      price: "$35",
      category: "Apparel",
      image: "https://via.placeholder.com/300x300"
    },
    {
      id: 2,
      name: "Premium Hoodie",
      price: "$65",
      category: "Apparel",
      image: "https://via.placeholder.com/300x300"
    },
    {
      id: 3,
      name: "Kushie Cap",
      price: "$30",
      category: "Accessories",
      image: "https://via.placeholder.com/300x300"
    },
    {
      id: 4,
      name: "Rolling Tray",
      price: "$25",
      category: "Accessories",
      image: "https://via.placeholder.com/300x300"
    },
    {
      id: 5,
      name: "Glass Ashtray",
      price: "$20",
      category: "Accessories",
      image: "https://via.placeholder.com/300x300"
    },
    {
      id: 6,
      name: "Sticker Pack",
      price: "$10",
      category: "Accessories",
      image: "https://via.placeholder.com/300x300"
    }
  ]

  return (
    <div ref={merchRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-neon-orange text-center">
          Kushie Merch
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Rep the brand with exclusive Kushie merchandise. Premium quality gear 
          for the cannabis connoisseur.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-neon-orange text-white rounded-full font-medium hover:bg-neon-orange-hover transition-colors">
            All
          </button>
          <button className="px-6 py-2 border border-gray-600 text-white rounded-full font-medium hover:border-gray-400 transition-colors">
            Apparel
          </button>
          <button className="px-6 py-2 border border-gray-600 text-white rounded-full font-medium hover:border-gray-400 transition-colors">
            Accessories
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map((item) => (
            <div key={item.id} className="bg-gray-900/50 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <p className="text-neon-orange text-sm mb-2">{item.category}</p>
                <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-neon-orange">{item.price}</p>
                  <button className="px-6 py-2 bg-neon-orange text-white rounded-lg font-medium hover:bg-neon-orange-hover transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900/50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-white">Custom Merch for Dispensaries</h2>
          <p className="text-gray-400 mb-6">
            Looking for custom branded merchandise for your dispensary? 
            We offer bulk orders with custom designs.
          </p>
          <button className="px-8 py-3 bg-neon-orange text-white rounded-lg font-medium hover:bg-neon-orange-hover transition-colors">
            Inquire About Custom Orders
          </button>
        </div>
      </div>
    </div>
  )
}

export default Merch