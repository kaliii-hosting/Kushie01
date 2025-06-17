import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [communityOpen, setCommunityOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Mobile menu animations will be added after fixing the error
  }, [isOpen])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0B0B0D]/95 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl blur opacity-30" />
            </div>
            <span className="text-2xl font-bold text-white">Huly</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `text-gray-300 hover:text-white transition-colors font-medium ${isActive ? 'text-white' : ''}`
                }
              >
                Features
              </NavLink>
              
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `text-gray-300 hover:text-white transition-colors font-medium ${isActive ? 'text-white' : ''}`
                }
              >
                Pricing
              </NavLink>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors font-medium flex items-center space-x-1"
                >
                  <span>Resources</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {resourcesOpen && (
                  <div 
                    onMouseEnter={() => setResourcesOpen(true)}
                    onMouseLeave={() => setResourcesOpen(false)}
                    className="absolute top-full mt-2 w-56 bg-[#1a1a1a] border border-gray-800 rounded-xl shadow-2xl py-2"
                  >
                    <a href="#" className="block px-5 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                      <div className="font-medium">Documentation</div>
                      <div className="text-sm text-gray-500">Learn how to use Huly</div>
                    </a>
                    <a href="#" className="block px-5 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                      <div className="font-medium">API Reference</div>
                      <div className="text-sm text-gray-500">Integrate with your tools</div>
                    </a>
                    <a href="#" className="block px-5 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                      <div className="font-medium">Changelog</div>
                      <div className="text-sm text-gray-500">See what's new</div>
                    </a>
                  </div>
                )}
              </div>

              {/* Community Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setCommunityOpen(true)}
                  onMouseLeave={() => setCommunityOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors font-medium flex items-center space-x-1"
                >
                  <span>Community</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {communityOpen && (
                  <div 
                    onMouseEnter={() => setCommunityOpen(true)}
                    onMouseLeave={() => setCommunityOpen(false)}
                    className="absolute top-full mt-2 w-56 bg-[#1a1a1a] border border-gray-800 rounded-xl shadow-2xl py-2"
                  >
                    <a href="#" className="block px-5 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                        </svg>
                        <span>Discord</span>
                      </div>
                    </a>
                    <a href="#" className="block px-5 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                      </div>
                    </a>
                    <a href="#" className="block px-5 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-3">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                        <span>Twitter</span>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-medium">Star Us</span>
              </a>
              <button className="text-gray-300 hover:text-white transition-colors font-medium px-4 py-2">
                Sign In
              </button>
              <button className="px-6 py-2.5 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform duration-200 shadow-lg">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-[#1a1a1a] border-t border-gray-800 rounded-b-2xl">
            <div className="p-4 space-y-4">
              <NavLink
                to="/features"
                className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Features
              </NavLink>
              <NavLink
                to="/pricing"
                className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </NavLink>
              <NavLink
                to="/about"
                className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <div className="pt-4 border-t border-gray-800 space-y-3">
                <button className="w-full text-left text-gray-300 hover:text-white transition-colors font-medium py-2">
                  Sign In
                </button>
                <button className="w-full px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar