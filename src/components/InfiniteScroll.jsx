import { useEffect, useRef } from 'react'

const features = [
  '✓ Premium Quality',
  '✓ Transparent Process',
  '✓ User-Focused Design',
  '✓ Detailed Specifications',
  '✓ Rigorous Testing',
  '✓ Clean Development',
  '✓ Smart Workflows',
  '✓ Real-time Tracking',
  '✓ Version Control',
  '✓ Team Collaboration'
]

function InfiniteScroll() {
  const scrollRef = useRef(null)
  const scrollContentRef = useRef(null)

  useEffect(() => {
    // Infinite scroll animation will be added after fixing the error
  }, [])

  return (
    <section className="py-12 bg-[#0B0B0D] overflow-hidden border-y border-gray-800/50">
      <div ref={scrollRef} className="relative">
        <div ref={scrollContentRef} className="flex items-center space-x-12 animate-infinite-scroll">
          {/* Duplicate the features array multiple times for seamless loop */}
          {[...features, ...features, ...features].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 whitespace-nowrap"
            >
              <span className="text-2xl font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {feature}
              </span>
              {index < features.length * 3 - 1 && (
                <span className="text-gray-600 text-2xl">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InfiniteScroll