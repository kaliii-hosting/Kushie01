import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false)
  const [showCommunityDropdown, setShowCommunityDropdown] = useState(false)

  const logoUrl = "https://fchtwxunzmkzbnibqbwl.supabase.co/storage/v1/object/sign/kushie01/aq1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYzRiNjM2NS0xMjBkLTQ2ZWEtYWVhOC1mMjIxMWEwNWRiNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJrdXNoaWUwMS9hcTEucG5nIiwiaWF0IjoxNzUwMTg3NzU2LCJleHAiOjIwNjU1NDc3NTZ9.rtUfRHavxCvpwK8brcPcGaoVxrfVlqxztzb_rg9uEKg"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Prevent scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="w-full">
          <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logoUrl} 
                alt="Kushie Brand" 
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
              <div className="flex items-center space-x-6 xl:space-x-8">
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    `text-gray-300 hover:text-white transition-colors font-medium text-sm ${isActive ? 'text-white' : ''}`
                  }
                >
                  Pricing
                </NavLink>
                
                {/* Resources Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setShowResourcesDropdown(true)}
                  onMouseLeave={() => setShowResourcesDropdown(false)}
                >
                  <button className="text-gray-300 hover:text-white transition-colors font-medium text-sm flex items-center space-x-1">
                    <span>Resources</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {showResourcesDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl py-2 border border-gray-800">
                      <NavLink to="/blog" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                        Blog
                      </NavLink>
                      <NavLink to="/docs" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                        Docs
                      </NavLink>
                      <NavLink to="/changelog" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                        Changelog
                      </NavLink>
                    </div>
                  )}
                </div>

                {/* Community Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setShowCommunityDropdown(true)}
                  onMouseLeave={() => setShowCommunityDropdown(false)}
                >
                  <button className="text-gray-300 hover:text-white transition-colors font-medium text-sm flex items-center space-x-1">
                    <span>Community</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {showCommunityDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl py-2 border border-gray-800">
                      <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                        X.com
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                        LinkedIn
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                        YouTube
                      </a>
                      <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                        Slack
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
                        GitHub
                      </a>
                    </div>
                  )}
                </div>

                <NavLink
                  to="/download"
                  className={({ isActive }) =>
                    `text-gray-300 hover:text-white transition-colors font-medium text-sm ${isActive ? 'text-white' : ''}`
                  }
                >
                  Download
                </NavLink>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center lg:space-x-3 xl:space-x-4">
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 lg:px-4 text-gray-300 hover:text-white transition-colors font-medium text-sm flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <span>Star Us</span>
                </a>
                <NavLink
                  to="/signin"
                  className="px-3 py-2 lg:px-4 text-gray-300 hover:text-white transition-colors font-medium text-sm"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className="px-4 py-2 lg:px-6 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </NavLink>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white relative z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Responsive Full Screen */}
      <div className={`fixed inset-0 bg-black z-40 lg:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className={`h-full flex flex-col transition-all duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Menu Content - Dynamic height based on viewport */}
          <div className="flex-1 flex flex-col pt-16 sm:pt-20 px-6 sm:px-8 md:px-12" style={{ height: '100vh', maxHeight: '100vh' }}>
            {/* Main Navigation - Compact spacing for small screens */}
            <nav className="flex-1 flex flex-col justify-between py-4">
              {/* Menu Items */}
              <div className="space-y-1">
                <NavLink
                  to="/pricing"
                  className="block text-xl sm:text-2xl font-semibold text-white hover:text-gray-300 transition-colors py-2 sm:py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </NavLink>
                
                {/* Resources Section - Collapsible on mobile */}
                <div className="py-2 sm:py-3">
                  <p className="text-xl sm:text-2xl font-semibold text-white mb-2">Resources</p>
                  <div className="pl-4 space-y-1">
                    <NavLink
                      to="/blog"
                      className="block text-base sm:text-lg text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Blog
                    </NavLink>
                    <NavLink
                      to="/docs"
                      className="block text-base sm:text-lg text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Docs
                    </NavLink>
                    <NavLink
                      to="/changelog"
                      className="block text-base sm:text-lg text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Changelog
                    </NavLink>
                  </div>
                </div>

                {/* Community Section - Compact for mobile */}
                <div className="py-2 sm:py-3">
                  <p className="text-xl sm:text-2xl font-semibold text-white mb-2">Community</p>
                  <div className="pl-4 grid grid-cols-2 gap-x-4 gap-y-1">
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      X.com
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      YouTube
                    </a>
                    <a
                      href="https://slack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Slack
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg text-gray-400 hover:text-white transition-colors py-1 col-span-2"
                      onClick={() => setIsOpen(false)}
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <NavLink
                  to="/download"
                  className="block text-xl sm:text-2xl font-semibold text-white hover:text-gray-300 transition-colors py-2 sm:py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Download
                </NavLink>
              </div>

              {/* CTA Buttons - Fixed at bottom */}
              <div className="space-y-2 mt-4">
                <NavLink 
                  to="/signin"
                  className="block w-full px-4 py-2.5 text-center border border-gray-600 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </NavLink>
                <NavLink 
                  to="/signup"
                  className="block w-full px-4 py-2.5 text-center bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </NavLink>
              </div>
            </nav>

            {/* Social links - Compact at very bottom */}
            <div className="py-4 border-t border-white/10">
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar