import { useEffect, useRef } from 'react'

function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  return (
    <div ref={aboutRef} className="min-h-screen py-20 bg-huly-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient text-center">
            About Huly
          </h1>
          
          <div className="space-y-8 text-lg text-gray-300">
            <p className="text-xl leading-relaxed">
              Huly is the everything app for your teams - a powerful, all-in-one project management platform 
              that brings together tasks, docs, chat, and more in a single, beautifully designed workspace.
            </p>

            <div className="grid md:grid-cols-2 gap-12 my-16">
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-white">Our Mission</h2>
                <p className="text-gray-400">
                  To empower teams worldwide with tools that make collaboration effortless, 
                  productivity seamless, and work more enjoyable.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-4 text-white">Our Vision</h2>
                <p className="text-gray-400">
                  A world where every team can achieve their full potential through 
                  intelligent tools that adapt to their unique workflow.
                </p>
              </div>
            </div>

            <div className="bg-huly-dark-secondary rounded-2xl p-8 my-12">
              <h2 className="text-3xl font-semibold mb-6 text-white">Why Choose Huly?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-2 text-huly-blue">Fast & Reliable</h3>
                  <p className="text-gray-400 text-sm">
                    Built for speed with enterprise-grade reliability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-huly-orange">Developer First</h3>
                  <p className="text-gray-400 text-sm">
                    Deep GitHub integration and API-first design.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-huly-gradient">AI Powered</h3>
                  <p className="text-gray-400 text-sm">
                    Smart automation that learns from your workflow.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <h2 className="text-3xl font-semibold mb-6 text-white">Join Our Journey</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                We're building the future of work, and we'd love for you to be part of it. 
                Try Huly today and experience the difference.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="px-8 py-3 bg-huly-blue text-white rounded-lg font-medium btn-glow btn-glow-blue">
                  Get Started Free
                </button>
                <button className="px-8 py-3 border border-gray-600 text-white rounded-lg font-medium hover:border-gray-400 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About