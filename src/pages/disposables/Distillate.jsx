import { useEffect, useRef } from 'react'

function DisposablesDistillate() {
  const pageRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  const products = [
    {
      id: 1,
      name: "Strawberry Cough Disposable",
      thc: "90%",
      price: "$35",
      strain: "Sativa",
      size: "1g",
      puffs: "300+",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 2,
      name: "Wedding Cake Disposable",
      thc: "91%",
      price: "$35",
      strain: "Hybrid",
      size: "1g",
      puffs: "300+",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 3,
      name: "Granddaddy Purple Disposable",
      thc: "89%",
      price: "$35",
      strain: "Indica",
      size: "1g",
      puffs: "300+",
      image: "https://via.placeholder.com/300x400"
    },
    {
      id: 4,
      name: "Pineapple Express Disposable",
      thc: "90%",
      price: "$35",
      strain: "Hybrid",
      size: "1g",
      puffs: "300+",
      image: "https://via.placeholder.com/300x400"
    }
  ]

  return (
    <div ref={pageRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-yellow-500 text-center">
          Distillate Disposables
        </h1>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Convenient, rechargeable disposable vapes filled with premium distillate. 
          Perfect for on-the-go enjoyment.
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
                    <span className="text-gray-400">Puffs:</span>
                    <span className="text-white ml-1">{product.puffs}</span>
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
          <h2 className="text-3xl font-semibold mb-6 text-white">Disposable Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl mb-3">🔋</div>
              <h3 className="text-lg font-medium text-yellow-500 mb-2">Rechargeable</h3>
              <p className="text-gray-400 text-sm">
                USB-C charging port ensures you use every last drop
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-medium text-yellow-500 mb-2">Draw Activated</h3>
              <p className="text-gray-400 text-sm">
                No buttons needed - just inhale to activate
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-medium text-yellow-500 mb-2">Consistent Hits</h3>
              <p className="text-gray-400 text-sm">
                Advanced airflow design for smooth, even draws
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-lg font-medium text-yellow-500 mb-2">Lab Tested</h3>
              <p className="text-gray-400 text-sm">
                Every batch tested for purity and potency
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisposablesDistillate