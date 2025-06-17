import { useEffect, useRef } from 'react'

function FeatureCard({ icon, title, description, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    // Card animations will be added after fixing the error
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group relative bg-huly-dark-secondary border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors cursor-pointer"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-huly-blue/0 via-huly-blue/5 to-huly-orange/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      
      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        
        <div className="mt-4 flex items-center text-huly-blue text-sm font-medium">
          <span>Learn more</span>
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard