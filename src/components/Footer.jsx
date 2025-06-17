import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-huly-dark border-t border-white/10">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="https://fchtwxunzmkzbnibqbwl.supabase.co/storage/v1/object/sign/kushie01/aq1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYzRiNjM2NS0xMjBkLTQ2ZWEtYWVhOC1mMjIxMWEwNWRiNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJrdXNoaWUwMS9hcTEucG5nIiwiaWF0IjoxNzUwMTg3NzU2LCJleHAiOjIwNjU1NDc3NTZ9.rtUfRHavxCvpwK8brcPcGaoVxrfVlqxztzb_rg9uEKg"
                alt="Kushie Brand"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-xs font-light">
              Premium hand-crafted cannabis products from Los Angeles, California.
            </p>
            <div className="text-sm text-gray-500">
              21+ Only • Adults Only
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/cartridges" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Distillate Cartridges
                </Link>
              </li>
              <li>
                <Link to="/products/disposables" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Disposables
                </Link>
              </li>
              <li>
                <Link to="/products/prerolls" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Infused Prerolls
                </Link>
              </li>
              <li>
                <Link to="/products/pods" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pods & Batteries
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/lab-results" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Lab Results
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Find Retailers
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Wholesale
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-medium mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest product drops and exclusive offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-huly-blue transition-colors text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-huly-blue text-white rounded-lg font-medium hover:bg-huly-blue/90 transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright and Legal */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <p>&copy; 2024 Kushie Brand. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link to="/compliance" className="hover:text-white transition-colors">Compliance</Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-gray-500 max-w-3xl mx-auto">
              WARNING: Products contain THC. Keep out of reach of children and animals. 
              Cannabis products may only be purchased by adults 21 years of age or older. 
              Use of cannabis products may impair your ability to drive and operate machinery.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer