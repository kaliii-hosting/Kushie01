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
    <div ref={homeRef} className="min-h-screen bg-huly-dark">
      <Hero />
      
      {/* Unmatched Productivity Section */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Unmatched productivity
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Huly is a process, project, time, and knowledge management platform that provides
              <br />
              powerful collaborative tools for developers and product teams alike.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {/* Keyboard shortcuts card */}
            <div className="bg-black rounded-lg overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-[16/10] p-8 flex items-center justify-center">
                <div className="bg-gray-900 rounded-lg p-6 w-full max-w-sm">
                  <div className="text-gray-500 text-sm mb-2">cmd+k</div>
                  <div className="bg-gray-800 rounded p-4">
                    <div className="text-gray-400 text-sm mb-1">Type "As" to find...</div>
                    <div className="text-white">New Application</div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-white font-semibold">Keyboard shortcuts.</h3>
                <p className="text-gray-400 text-sm">Work efficiently with hotkeys</p>
                <p className="text-gray-500 text-sm">designed by developers for everyone.</p>
              </div>
            </div>

            {/* Team Planner card */}
            <div className="bg-black rounded-lg overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-[16/10] p-8 flex items-center justify-center">
                <div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium">Team Planner</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div className="flex-1 bg-blue-100 rounded h-6"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div className="flex-1 bg-green-100 rounded h-6"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-white font-semibold">Team Planner.</h3>
                <p className="text-gray-400 text-sm">Keep track of the bigger picture by having all</p>
                <p className="text-gray-500 text-sm">team members' schedules in one place.</p>
              </div>
            </div>

            {/* Time-blocking card */}
            <div className="bg-black rounded-lg overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-[16/10] p-8 flex items-center justify-center">
                <div className="bg-white rounded-lg p-4 w-full max-w-sm shadow-xl">
                  <div className="space-y-3">
                    <div className="bg-blue-500 text-white px-3 py-2 rounded text-sm">
                      Ability PoCs of which v1.6 milestones
                    </div>
                    <div className="text-gray-600 text-sm">Sprint Planning</div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>9:00 AM</span>
                      <span>→</span>
                      <span>€119</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-white font-semibold">Time-blocking.</h3>
                <p className="text-gray-400 text-sm">Transform daily tasks into structured</p>
                <p className="text-gray-500 text-sm">time blocks for focused work sessions.</p>
              </div>
            </div>

            {/* Notifications card */}
            <div className="bg-black rounded-lg overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="aspect-[16/10] p-8 flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 blur-xl opacity-60"></div>
                </div>
                <div className="relative bg-black/80 backdrop-blur rounded-full p-4 sm:p-6 md:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg sm:text-xl md:text-2xl">🔔</span>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-white font-semibold">Notifications.</h3>
                <p className="text-gray-400 text-sm">Keep up to date with any changes by</p>
                <p className="text-gray-500 text-sm">receiving instant notifications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Products Section */}
      <section className="py-24 bg-huly-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              <span className="text-gradient">Premium</span>
              <span className="text-white"> Products</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Hand-crafted cannabis products using only top-shelf quality flower
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Distillate Cartridge */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="mb-6">
                <span className="text-5xl">💨</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">1G Cartridge</h3>
              <div className="text-3xl font-semibold text-gradient mb-4">90%+ THC</div>
              <p className="text-gray-400 mb-6 font-light">
                Clean and pure cannabis oil using only top-shelf quality flower and cannabis-derived terpenes.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">No PG/PEG/VG</span>
                <button className="px-4 py-2 bg-huly-blue text-white rounded-lg font-medium text-sm hover:bg-huly-blue/90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Live Resin Disposable */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="mb-6">
                <span className="text-5xl">💎</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">1G Disposable</h3>
              <div className="text-3xl font-semibold text-gradient mb-4">85%+ THC</div>
              <p className="text-gray-400 mb-6 font-light">
                Clean and pure cannabis live resin diamonds using top-shelf quality flower.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Live Resin</span>
                <button className="px-4 py-2 bg-huly-blue text-white rounded-lg font-medium text-sm hover:bg-huly-blue/90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hash Rosin Preroll */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="mb-6">
                <span className="text-5xl">🔥</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Infused Preroll</h3>
              <div className="text-3xl font-semibold text-white mb-4">1.3G Total</div>
              <p className="text-gray-400 mb-6 font-light">
                0.40g hash rosin + 0.90g indoor flower. Available in 4 premium strains.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Hash Rosin</span>
                <button className="px-4 py-2 bg-huly-blue text-white rounded-lg font-medium text-sm hover:bg-huly-blue/90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InfiniteScroll />

      <FeatureSection
        title="No Additives Ever"
        subtitle="Pure Cannabis"
        description="We never use PG, PEG, VG, MCT or any fillers. Just pure, clean cannabis oil extracted from premium flower."
        imagePosition="left"
        isDark={true}
        features={[
          "100% Cannabis derived terpenes",
          "No cutting agents or fillers",
          "Lab tested for purity",
          "Consistent potency guaranteed"
        ]}
        videoUrl="https://fchtwxunzmkzbnibqbwl.supabase.co/storage/v1/object/sign/kushie01/cartridges-compressed.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYzRiNjM2NS0xMjBkLTQ2ZWEtYWVhOC1mMjIxMWEwNWRiNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJrdXNoaWUwMS9jYXJ0cmlkZ2VzLWNvbXByZXNzZWQubXA0IiwiaWF0IjoxNzUwMTk2OTA1LCJleHAiOjIwNjU1NTY5MDV9.HiMYusF2D35LY27DXuf9FTLwCpdIKZrzcPK4JHr1xO8"
      />

      <FeatureSection
        title="Top-Shelf Quality"
        subtitle="Premium Standards"
        description="Every batch starts with hand-selected, top-shelf flower. We maintain the highest standards from seed to sale."
        imagePosition="right"
        features={[
          "Indoor grown premium flower",
          "Hand-trimmed and cured",
          "Small batch production",
          "Quality over quantity"
        ]}
      />

      <FeatureSection
        title="Los Angeles Born"
        subtitle="California Cannabis"
        description="Proudly crafted in Los Angeles, California. We embody the relaxed lifestyle and premium quality that LA is known for."
        imagePosition="left"
        isDark={true}
        features={[
          "Licensed California facility",
          "Compliant with all regulations",
          "Supporting local cannabis culture",
          "Available at select dispensaries"
        ]}
      />

      {/* Call to Action Section */}
      <section className="py-24 lg:py-32 bg-huly-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-huly-blue/10 to-huly-orange/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
              <span className="text-white">Find Products </span>
              <span className="text-gradient">Near You</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-light">
              Available at select licensed dispensaries throughout California. 
              Must be 21+ with valid ID.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-huly-blue text-white rounded-lg font-medium hover:bg-huly-blue/90 transition-colors">
                Find Retailers
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                Wholesale Inquiry
              </button>
            </div>
            
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-semibold text-gradient mb-2">100+</div>
                <div className="text-gray-400 text-sm">Retail Partners</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-semibold text-gradient mb-2">50+</div>
                <div className="text-gray-400 text-sm">Strains</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-semibold text-white mb-2">#1</div>
                <div className="text-gray-400 text-sm">In Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home