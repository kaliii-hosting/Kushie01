import { useEffect, useRef } from 'react'

function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added after fixing the error
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark background matching huly.io */}
      <div className="absolute inset-0 bg-huly-dark z-0" />
      
      {/* Gradient overlay like huly.io */}
      <div ref={videoRef} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-huly-blue/10 via-transparent to-huly-orange/10" />
      </div>

      {/* Gradient orbs for visual effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-huly-blue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-huly-orange/20 rounded-full blur-3xl" />


      {/* Content */}
      <div className="relative z-20 container-custom text-center px-4">
        <div className="max-w-5xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight"
          >
            <span className="text-gradient">Premium Cannabis</span>
            <br />
            <span className="text-white">Reimagined</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light"
          >
            Experience the finest hand-crafted cannabis products from Los Angeles.
            Clean, pure, and consistently delivering exceptional quality.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-huly-blue text-white rounded-lg font-medium hover:bg-huly-blue/90 transition-all duration-200 shadow-xl">
              Explore Products
            </button>
            <button className="px-8 py-4 border border-gray-600 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-200">
              View Catalog
            </button>
          </div>

          {/* Product highlights */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-semibold text-gradient mb-2">90%+</div>
              <div className="text-gray-400 text-sm">THC Potency</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-semibold text-gradient mb-2">100%</div>
              <div className="text-gray-400 text-sm">Cannabis Derived</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-3xl font-semibold text-white mb-2">Zero</div>
              <div className="text-gray-400 text-sm">Additives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-gray-400 rounded-full mt-1.5 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero