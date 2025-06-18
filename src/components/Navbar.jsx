import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showMegaMenu, setShowMegaMenu] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products', hasMegaMenu: true },
    { name: 'About', path: '/about' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ]

  const megaMenuCategories = [
    {
      title: 'BATTERIES',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=200',
      products: [
        { name: 'BAR Battery', path: '/batteries' },
        { name: 'Pro Battery', path: '/batteries' },
        { name: 'Pro XL Battery', path: '/batteries' },
        { name: 'Original Battery', path: '/batteries' },
        { name: 'BIIIG Battery', path: '/batteries' }
      ]
    },
    {
      title: 'PODS',
      image: 'https://images.unsplash.com/photo-1586104237516-6b5c3a5e9cef?w=200',
      products: [
        { name: 'Starter Pack', path: '/pods' },
        { name: 'Original THC', path: '/pods' },
        { name: 'Live Resin Liquid Diamonds', path: '/pods/live-resin' },
        { name: 'All-in-One THC Pens', path: '/pods' },
        { name: 'LRLD AIO THC Pens', path: '/pods' },
        { name: 'LIIIL AIO THC Pens', path: '/pods' }
      ]
    },
    {
      title: 'FLOWER',
      image: 'https://images.unsplash.com/photo-1536819114556-1e10f967fb61?w=200',
      products: [
        { name: 'Exotics Flower', path: '/prerolls' },
        { name: 'Exotics Pre-Rolls', path: '/prerolls' },
        { name: 'Black Label', path: '/prerolls' },
        { name: 'Grey Label', path: '/prerolls' },
        { name: 'White Label', path: '/prerolls' },
        { name: "40's Infused Flower", path: '/prerolls/infused' },
        { name: "40's Infused Pre-Rolls", path: '/prerolls/infused' },
        { name: "40's Infused Blunts", path: '/prerolls/infused' },
        { name: 'Pre-Rolls', path: '/prerolls/regular' }
      ]
    },
    {
      title: 'EXTRACTS',
      image: 'https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?w=200',
      products: [
        { name: 'Curated Live Resin', path: '/cartridges' },
        { name: 'Live Resin Diamonds', path: '/cartridges/diamonds' },
        { name: 'Crushed Diamond Extracts', path: '/cartridges/diamonds' },
        { name: 'Live Rosin Badder', path: '/cartridges' },
        { name: 'Live Rosin Jam', path: '/cartridges' }
      ]
    },
    {
      title: 'EDIBLES',
      image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=200',
      products: [
        { name: '200mg Gummy Edibles', path: '/merch' },
        { name: '100mg Gummy Edibles', path: '/merch' },
        { name: '2:1 Gummy Edibles', path: '/merch' }
      ]
    }
  ]

  const mobileMenuItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Products', 
      path: '/products',
      submenu: [
        { name: 'All Products', path: '/products' },
        { name: 'Batteries', path: '/batteries' },
        { name: 'Pods', path: '/pods' },
        { name: 'Cartridges', path: '/cartridges' },
        { name: 'Disposables', path: '/disposables' },
        { name: 'Prerolls', path: '/prerolls' },
        { name: 'Merch', path: '/merch' }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ]

  const logoUrl = "https://fchtwxunzmkzbnibqbwl.supabase.co/storage/v1/object/public/kushie01//Logo%20Kushie%20(W-SVG).svg"

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-black/80'
      }`}>
        <div className="w-full px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center py-4">
              <img src={logoUrl} alt="Kushie Brand" className="h-12 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasMegaMenu ? (
                    <button
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                        location.pathname.startsWith(item.path)
                          ? 'text-neon-orange'
                          : 'text-white hover:text-neon-orange'
                      }`}
                      onMouseEnter={() => setShowMegaMenu(true)}
                      onMouseLeave={() => setShowMegaMenu(false)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.path
                          ? 'text-neon-orange'
                          : 'text-white hover:text-neon-orange'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-3 rounded-md text-white hover:text-neon-orange focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <div 
          className={`absolute left-0 w-full bg-black/95 backdrop-blur-xl transition-all duration-300 ${
            showMegaMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={() => setShowMegaMenu(false)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-5 gap-8">
              {megaMenuCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <h3 className="absolute bottom-2 left-2 text-white font-bold text-lg">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.products.map((product, idx) => (
                      <li key={idx}>
                        <Link
                          to={product.path}
                          className="text-sm text-gray-400 hover:text-neon-orange transition-colors block"
                          onClick={() => setShowMegaMenu(false)}
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-40 lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`h-full flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}>
          {/* Mobile Header with Logo */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <Link to="/" onClick={() => setIsOpen(false)} className="py-2">
              <img src={logoUrl} alt="Kushie Brand" className="h-10 w-auto" />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 text-white hover:text-neon-orange"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto">
            <nav className="px-4 py-6">
              {mobileMenuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-800 last:border-0">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setOpenMobileDropdown(
                          openMobileDropdown === item.name ? null : item.name
                        )}
                        className="w-full flex items-center justify-between py-4 text-lg font-medium text-white hover:text-neon-orange transition-colors"
                      >
                        {item.name}
                        <ChevronDown className={`h-5 w-5 transition-transform ${
                          openMobileDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${
                        openMobileDropdown === item.name ? 'max-h-96' : 'max-h-0'
                      }`}>
                        <div className="pb-4 pl-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block py-2 text-gray-400 hover:text-neon-orange transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block py-4 text-lg font-medium text-white hover:text-neon-orange transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Footer */}
          <div className="p-4 border-t border-gray-800">
            <Link 
              to="/wholesale"
              className="block w-full py-3 text-center bg-neon-orange text-white rounded-lg font-medium hover:bg-neon-orange-hover transition-colors"
              onClick={() => setIsOpen(false)}
            >
              BECOME A PARTNER
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar