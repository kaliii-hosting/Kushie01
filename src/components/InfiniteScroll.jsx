import { useEffect, useRef } from 'react'

const features = [
  'PREMIUM CANNABIS',
  '90%+ THC',
  'TOP-SHELF FLOWER',
  'NO ADDITIVES',
  'LAB TESTED',
  'CLEAN & PURE',
  'CALIFORNIA GROWN',
  'CONSISTENT QUALITY',
  'HAND-CRAFTED',
  'POTENT EFFECTS'
]

function InfiniteScroll() {
  const scrollRef = useRef(null)
  const scrollContentRef = useRef(null)

  useEffect(() => {
    // Infinite scroll animation will be added after fixing the error
  }, [])

  return (
    <section className="py-4 sm:py-6 md:py-8 bg-huly-dark overflow-hidden border-y border-white/10">
      <div ref={scrollRef} className="relative">
        <div ref={scrollContentRef} className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 animate-infinite-scroll">
          {/* Duplicate the features array multiple times for seamless loop */}
          {[...features, ...features, ...features].map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 whitespace-nowrap"
            >
              <span className="text-sm sm:text-base md:text-lg font-medium text-gray-400 whitespace-nowrap">
                {feature}
              </span>
              {index < features.length * 3 - 1 && (
                <span className="text-gray-600 text-base sm:text-lg md:text-xl">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InfiniteScroll