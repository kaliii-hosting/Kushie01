import { useEffect, useRef } from 'react'

function Contact() {
  const contactRef = useRef(null)

  useEffect(() => {
    // GSAP animations will be added here
  }, [])

  return (
    <div ref={contactRef} className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-neon-orange text-center">
            Contact Us
          </h1>
          
          <div className="space-y-8 text-lg text-gray-300">
            <p className="text-xl leading-relaxed text-center">
              Get in touch with the Kushie Brand team. We're here to answer your questions 
              about our premium cannabis products and wholesale opportunities.
            </p>

            <div className="grid md:grid-cols-2 gap-12 my-16">
              <div className="bg-gray-900/50 rounded-2xl p-8">
                <h2 className="text-3xl font-semibold mb-6 text-white">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-neon-orange">Email</h3>
                    <p className="text-gray-400">info@kushiebrand.com</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-neon-orange">Phone</h3>
                    <p className="text-gray-400">1-800-KUSHIE-1</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-neon-orange">Business Hours</h3>
                    <p className="text-gray-400">Monday - Friday: 9AM - 6PM PST</p>
                    <p className="text-gray-400">Saturday - Sunday: 10AM - 4PM PST</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-2xl p-8">
                <h2 className="text-3xl font-semibold mb-6 text-white">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-neon-orange focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-neon-orange focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-neon-orange focus:outline-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button className="w-full px-8 py-3 bg-neon-orange text-white rounded-lg font-medium hover:bg-neon-orange-hover transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-semibold mb-4 text-white">Visit Our Flagship Store</h2>
              <p className="text-gray-400 mb-4">
                Experience the full Kushie Brand collection at our flagship location
              </p>
              <p className="text-gray-300">
                123 Cannabis Way<br />
                Los Angeles, CA 90210
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact