import { useEffect, useRef } from 'react'
import Hero from '../components/Hero'
import FeatureSection from '../components/FeatureSection'
import InfiniteScroll from '../components/InfiniteScroll'

function Home() {
  const homeRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  return (
    <div ref={homeRef} className="min-h-screen">
      <Hero />
      
      <FeatureSection
        title="Premium Quality Standards"
        subtitle="Commitment to Excellence"
        description="Experience meticulous design and user-focused innovation. We prioritize clean, transparent product development with detailed specifications and rigorous testing protocols."
        imagePosition="right"
        features={[
          "Top-shelf quality assurance",
          "Transparent product specifications",
          "No unnecessary complexities",
          "Consistent performance standards"
        ]}
      />

      <InfiniteScroll />

      <FeatureSection
        title="Innovative Product Design"
        subtitle="User-Centric Approach"
        description="Multiple configuration options to meet diverse needs. Our intuitive product selection and streamlined user journey ensures the perfect fit for every team."
        imagePosition="left"
        isDark={true}
        features={[
          "Intuitive interface design",
          "Multiple product variants",
          "User-friendly experiences",
          "Adaptive workflows"
        ]}
      />

      <FeatureSection
        title="Transparent Process"
        subtitle="Clear Documentation"
        description="Detailed tracking and specification documentation at every step. Know exactly what's happening with complete visibility into your project's progress."
        imagePosition="right"
        features={[
          "Real-time progress tracking",
          "Comprehensive documentation",
          "Version control integration",
          "Audit trail maintenance"
        ]}
      />

      <FeatureSection
        title="Relaxed Workflow Management"
        subtitle="Streamlined Operations"
        description="Hand-crafted tools designed for premium experiences. Focus on what matters while we handle the complexity behind the scenes."
        imagePosition="left"
        isDark={true}
        features={[
          "Automated task management",
          "Smart prioritization",
          "Seamless integrations",
          "Effortless collaboration"
        ]}
      />

      {/* Call to Action Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-[#111113] to-[#0B0B0D] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join thousands of teams crafting premium experiences through meticulous design and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:scale-105 transition-transform shadow-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-700 text-white rounded-full font-medium text-lg hover:border-gray-500 hover:bg-white/5 transition-all">
                Schedule Demo
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">90%+</div>
                <div className="text-gray-500">Quality Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-500">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100k+</div>
                <div className="text-gray-500">Active Teams</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home