import { useEffect, useRef } from 'react'

function FeatureSection({ title, subtitle, description, imagePosition = 'right', isDark = false, features = [], videoUrl = null }) {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    // Scroll animations will be added after fixing the error
  }, [imagePosition])

  return (
    <section 
      ref={sectionRef}
      className={`py-24 lg:py-32 ${isDark ? 'bg-huly-dark' : 'bg-huly-dark-secondary'} relative overflow-hidden`}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className={`absolute ${imagePosition === 'right' ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-huly-blue/10 to-huly-orange/10 rounded-full blur-3xl`} />
      </div>

      <div className="container-custom relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
          imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
        }`}>
          {/* Content */}
          <div ref={contentRef} className={imagePosition === 'left' ? 'lg:order-2' : ''}>
            <div className="max-w-xl">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-white/10 text-gray-300 rounded-lg text-sm font-medium mb-4">
                  {subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-tight">
                  {title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                  {description}
                </p>
              </div>

              {/* Feature list if provided */}
              {features.length > 0 && (
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded bg-huly-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-huly-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300 font-light">{feature}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-huly-blue text-white rounded-lg font-medium hover:bg-huly-blue/90 transition-colors">
                  Learn More
                </button>
                <button className="px-6 py-3 border border-gray-600 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                  View Products
                </button>
              </div>
            </div>
          </div>

          {/* Image/Visualization */}
          <div ref={imageRef} className={`${imagePosition === 'left' ? 'lg:order-1' : ''} relative`}>
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-transparent p-0.5">
              <div className="bg-black rounded-2xl overflow-hidden">
                {videoUrl ? (
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="bg-huly-dark rounded-2xl p-8 lg:p-12 min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
                    {/* Placeholder visualization - replace with actual images/graphics */}
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-huly-blue/10 via-transparent to-huly-orange/10 rounded-lg" />
                      <div className="relative z-10 grid grid-cols-2 gap-4 p-6">
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                          <div className="w-12 h-12 bg-gradient-to-br from-huly-blue to-huly-blue/60 rounded-lg mb-3" />
                          <div className="h-2 bg-white/20 rounded mb-2" />
                          <div className="h-2 bg-white/10 rounded w-3/4" />
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                          <div className="w-12 h-12 bg-gradient-to-br from-huly-orange to-huly-orange/60 rounded-lg mb-3" />
                          <div className="h-2 bg-white/20 rounded mb-2" />
                          <div className="h-2 bg-white/10 rounded w-2/3" />
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                          <div className="w-12 h-12 bg-gradient-to-br from-huly-gradient to-huly-blue rounded-lg mb-3" />
                          <div className="h-2 bg-white/20 rounded mb-2" />
                          <div className="h-2 bg-white/10 rounded w-4/5" />
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                          <div className="w-12 h-12 bg-gradient-to-br from-huly-orange to-huly-gradient rounded-lg mb-3" />
                          <div className="h-2 bg-white/20 rounded mb-2" />
                          <div className="h-2 bg-white/10 rounded w-2/4" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection