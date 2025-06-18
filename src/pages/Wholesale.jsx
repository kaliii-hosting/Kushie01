import { useEffect, useRef } from 'react'

function Wholesale() {
  const wholesaleRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  return (
    <div ref={wholesaleRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-neon-orange text-center">
            Wholesale Partners
          </h1>
          
          <div className="space-y-8 text-lg text-gray-300">
            <p className="text-xl leading-relaxed text-center">
              Partner with Kushie Brand and bring premium cannabis products to your customers. 
              We offer competitive pricing and dedicated support for our wholesale partners.
            </p>

            <div className="grid md:grid-cols-3 gap-8 my-16">
              <div className="bg-gray-900/50 rounded-2xl p-6 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-neon-orange">Premium Quality</h3>
                <p className="text-gray-400">
                  Lab-tested products that exceed industry standards
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-neon-orange">Fast Delivery</h3>
                <p className="text-gray-400">
                  Same-day delivery available in select areas
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-6 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-neon-orange">Marketing Support</h3>
                <p className="text-gray-400">
                  Free marketing materials and product displays
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8">
              <h2 className="text-3xl font-semibold mb-6 text-white">Wholesale Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-neon-orange mr-3">•</span>
                  <span>Competitive wholesale pricing with volume discounts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-orange mr-3">•</span>
                  <span>Dedicated account manager for personalized support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-orange mr-3">•</span>
                  <span>Access to exclusive product launches and limited editions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-orange mr-3">•</span>
                  <span>Flexible payment terms for qualified partners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-orange mr-3">•</span>
                  <span>Comprehensive product training for your staff</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8">
              <h2 className="text-3xl font-semibold mb-6 text-white">Become a Partner</h2>
              <p className="text-gray-400 mb-6">
                Ready to join the Kushie Brand family? Fill out our wholesale application 
                and a member of our team will contact you within 24 hours.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="px-8 py-3 bg-neon-orange text-white rounded-lg font-medium hover:bg-neon-orange-hover transition-colors">
                  Apply Now
                </button>
                <button className="px-8 py-3 border border-gray-600 text-white rounded-lg font-medium hover:border-gray-400 transition-colors">
                  Download Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wholesale