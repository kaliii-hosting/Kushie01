import { Link } from 'react-router-dom'

function Products() {
  const productCategories = [
    {
      title: 'BATTERIES',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
      products: [
        'BAR Battery',
        'Pro Battery', 
        'Pro XL Battery',
        'Original Battery',
        'BIIIG Battery'
      ],
      link: '/batteries'
    },
    {
      title: 'PODS',
      image: 'https://images.unsplash.com/photo-1586104237516-6b5c3a5e9cef?w=400',
      products: [
        'Starter Pack',
        'Original THC',
        'Live Resin Liquid Diamonds (LRLD)',
        'All-in-One (AIO) THC Pens',
        'LRLD AIO THC Pens',
        'LIIIL AIO THC Pens'
      ],
      link: '/pods'
    },
    {
      title: 'FLOWER',
      image: 'https://images.unsplash.com/photo-1536819114556-1e10f967fb61?w=400',
      products: [
        'Exotics Flower',
        'Exotics Pre-Rolls',
        'Black Label',
        'Grey Label',
        'White Label',
        "40's Infused Flower",
        "40's Infused Pre-Rolls",
        "40's Infused Blunts",
        'Pre-Rolls'
      ],
      link: '/prerolls'
    },
    {
      title: 'EXTRACTS',
      image: 'https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?w=400',
      products: [
        'Curated Live Resin',
        'Live Resin Diamonds',
        'Crushed Diamond Extracts',
        'Live Rosin Badder',
        'Live Rosin Jam'
      ],
      link: '/cartridges'
    },
    {
      title: 'EDIBLES',
      image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400',
      products: [
        '200mg Gummy Edibles',
        '100mg Gummy Edibles',
        '2:1 Gummy Edibles'
      ],
      link: '/edibles'
    }
  ]

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-neon-orange mb-4 text-center">Our Products</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore our premium cannabis products, crafted with care and quality in Los Angeles
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {productCategories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group relative overflow-hidden rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
              
              <div className="p-4">
                <h2 className="text-xl font-bold text-white mb-3">{category.title}</h2>
                <ul className="space-y-1">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      • {product}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 flex items-center text-neon-orange group-hover:text-neon-orange-hover">
                  <span className="text-sm font-medium">View Products</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products