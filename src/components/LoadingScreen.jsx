import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function LoadingScreen({ onLoadingComplete }) {
  const containerRef = useRef(null)
  const logoRef = useRef(null)
  const glowRef = useRef(null)
  const sunburstRef = useRef(null)
  const smokeRefs = useRef([])
  const particleRefs = useRef([])

  const logoUrl = "https://fchtwxunzmkzbnibqbwl.supabase.co/storage/v1/object/sign/kushie01/aq1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hYzRiNjM2NS0xMjBkLTQ2ZWEtYWVhOC1mMjIxMWEwNWRiNzIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJrdXNoaWUwMS9hcTEucG5nIiwiaWF0IjoxNzUwMTg3NzU2LCJleHAiOjIwNjU1NDc3NTZ9.rtUfRHavxCvpwK8brcPcGaoVxrfVlqxztzb_rg9uEKg"

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onLoadingComplete, 200)
      }
    })

    // Initial setup
    gsap.set(logoRef.current, { 
      scale: 0, 
      opacity: 0,
      rotation: -180,
      filter: 'brightness(0) blur(20px)'
    })
    
    gsap.set(glowRef.current, { 
      scale: 0, 
      opacity: 0
    })

    gsap.set(sunburstRef.current, {
      scale: 0,
      opacity: 0,
      rotation: 0
    })

    gsap.set(smokeRefs.current, {
      opacity: 0,
      scale: 0,
      y: 0,
      x: (i) => (i - 2.5) * 20
    })

    gsap.set(particleRefs.current, {
      opacity: 0,
      scale: 0,
      x: 0,
      y: 0
    })

    // Main animation sequence
    tl
      // Sunburst entrance
      .to(sunburstRef.current, {
        scale: 2,
        opacity: 0.3,
        rotation: 180,
        duration: 3,
        ease: "power1.inOut"
      })
      // Glow effect
      .to(glowRef.current, {
        scale: 1.5,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, 0)
      // Logo entrance
      .to(logoRef.current, {
        scale: 1,
        opacity: 1,
        rotation: 0,
        filter: 'brightness(1) blur(0px)',
        duration: 1.2,
        ease: "back.out(1.4)"
      }, 0.2)
      // Logo pulse
      .to(logoRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1
      }, 1.2)
      // Smoke animation
      .to(smokeRefs.current, {
        opacity: (i) => 0.6 - i * 0.08,
        scale: (i) => 1 + i * 0.2,
        y: (i) => -150 - i * 30,
        x: (i) => (i - 2.5) * 40,
        duration: 2,
        stagger: 0.1,
        ease: "power1.out"
      }, 0.8)
      .to(smokeRefs.current, {
        opacity: 0,
        y: (i) => -250 - i * 40,
        scale: (i) => 1.5 + i * 0.3,
        duration: 1,
        stagger: 0.1,
        ease: "power1.in"
      }, 2)
      // Particle effects
      .to(particleRefs.current, {
        opacity: 1,
        scale: (i) => 0.5 + Math.random() * 0.5,
        x: (i) => (Math.random() - 0.5) * 200,
        y: (i) => -100 - Math.random() * 100,
        duration: 2,
        stagger: 0.05,
        ease: "power1.out"
      }, 1)
      .to(particleRefs.current, {
        opacity: 0,
        y: (i) => -200 - Math.random() * 100,
        duration: 1,
        ease: "power1.in"
      }, 2.5)
      // Final glow fade
      .to(glowRef.current, {
        opacity: 0.5,
        scale: 2,
        duration: 0.5,
        ease: "power2.in"
      }, 2.5)

    return () => {
      tl.kill()
    }
  }, [onLoadingComplete])

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      {/* Sunburst background */}
      <div ref={sunburstRef} className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-yellow-400/20 rounded-full blur-3xl" />
          <div className="absolute inset-[20%] bg-gradient-to-r from-yellow-300/30 via-orange-300/30 to-yellow-300/30 rounded-full blur-2xl" />
          <div className="absolute inset-[40%] bg-gradient-to-r from-yellow-200/40 via-orange-200/40 to-yellow-200/40 rounded-full blur-xl" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80">
          {/* Glow effect behind logo */}
          <div ref={glowRef} className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-yellow-400/50 via-orange-400/50 to-red-400/50 rounded-full blur-2xl" />
          </div>

          {/* Logo */}
          <div ref={logoRef} className="absolute inset-0 flex items-center justify-center">
            <img 
              src={logoUrl} 
              alt="Kushie Brand Logo" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain drop-shadow-[0_0_30px_rgba(251,191,36,0.5)]"
            />
          </div>
        </div>
      </div>

      {/* Cinematic smoke particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={el => smokeRefs.current[i] = el}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div 
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(255,255,255,${0.4 - i * 0.05}) 0%, transparent 60%)`,
                filter: 'blur(30px)',
                mixBlendMode: 'screen'
              }}
            />
          </div>
        ))}
      </div>

      {/* Golden particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            ref={el => particleRefs.current[i] = el}
            className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              background: i % 2 === 0 ? '#FCD34D' : '#F59E0B',
              boxShadow: '0 0 10px currentColor',
            }}
          />
        ))}
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-yellow-600/60 text-xs sm:text-sm uppercase tracking-wider font-light">
          For Adults 21+ Only
        </p>
      </div>
    </div>
  )
}

export default LoadingScreen