import { useEffect, useRef } from 'react'
import PricingCard from '../components/PricingCard'

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 team members',
      'Basic task management',
      'Limited storage (1GB)',
      'Community support',
      'Basic integrations'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Professional',
    price: '$15',
    period: '/user/month',
    description: 'For growing teams that need more power',
    features: [
      'Unlimited team members',
      'Advanced workflows',
      'Unlimited storage',
      'Priority support',
      'All integrations',
      'Analytics dashboard',
      'Custom fields'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with specific needs',
    features: [
      'Everything in Professional',
      'Advanced security',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'On-premise option',
      'Custom training'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
]

function Pricing() {
  const pricingRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  return (
    <div ref={pricingRef} className="min-h-screen py-20 bg-huly-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              index={index}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-400 mb-8">
            Have questions? We're here to help.
          </p>
          <button className="px-8 py-3 bg-huly-blue text-white rounded-lg font-medium btn-glow btn-glow-blue">
            View FAQ
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing