import { useEffect, useRef } from 'react'
import Button from './Button'

function PricingCard({ plan, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    // Pricing card animations will be added after fixing the error
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`relative ${plan.highlighted ? 'scale-105' : ''}`}
      style={{ perspective: '1000px' }}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-huly-blue text-white text-sm rounded-full">
          Most Popular
        </div>
      )}
      
      <div className={`
        relative bg-huly-dark-secondary border rounded-2xl p-8 h-full
        ${plan.highlighted ? 'border-huly-blue shadow-glow-blue' : 'border-gray-800'}
        hover:border-gray-600 transition-all duration-300
      `}>
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
          <p className="text-gray-400 text-sm">{plan.description}</p>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-white">{plan.price}</span>
            {plan.period && <span className="text-gray-400 ml-2">{plan.period}</span>}
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <svg className="w-5 h-5 text-huly-blue mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant={plan.highlighted ? 'primary' : 'outline'}
          size="medium"
          className="w-full"
        >
          {plan.cta}
        </Button>
      </div>
    </div>
  )
}

export default PricingCard