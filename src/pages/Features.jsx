import { useEffect, useRef } from 'react'
import FeatureCard from '../components/FeatureCard'

const features = [
  {
    icon: '📋',
    title: 'Task Management',
    description: 'Organize and track tasks with powerful boards and workflows.'
  },
  {
    icon: '👥',
    title: 'Team Collaboration',
    description: 'Work together in real-time with built-in communication tools.'
  },
  {
    icon: '🔄',
    title: 'GitHub Integration',
    description: 'Sync your code repositories with project management seamlessly.'
  },
  {
    icon: '🤖',
    title: 'AI Assistant',
    description: 'Get intelligent suggestions and automate repetitive tasks.'
  },
  {
    icon: '📊',
    title: 'Analytics',
    description: 'Track progress and performance with detailed insights.'
  },
  {
    icon: '🔍',
    title: 'Smart Search',
    description: 'Find anything instantly across your entire workspace.'
  },
  {
    icon: '📁',
    title: 'Document Management',
    description: 'Store and organize all your project documents in one place.'
  },
  {
    icon: '🔒',
    title: 'Security',
    description: 'Enterprise-grade security to keep your data safe.'
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized performance for teams of any size.'
  }
]

function Features() {
  const featuresRef = useRef(null)

  useEffect(() => {
    // GSAP staggered animations will be added here
  }, [])

  return (
    <div ref={featuresRef} className="min-h-screen py-20 bg-huly-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to manage projects, collaborate with your team, and ship faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features