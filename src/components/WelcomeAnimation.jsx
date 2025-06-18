import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function WelcomeAnimation({ onAnimationComplete }) {
  const containerRef = useRef(null)
  const logoRef = useRef(null)
  const textRef = useRef(null)
  const smokeContainerRef = useRef(null)
  const smokePuffRefs = useRef([])
  const turbulenceRef = useRef(null)

  const logoUrl = "https://fchtwxunzmkzbnibqbwl.supabase.co/storage/v1/object/public/kushie01//Logo%20Kushie%20(W-SVG).svg"

  useEffect(() => {
    console.log('Text ref:', textRef.current)
    console.log('Logo ref:', logoRef.current)
    
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onAnimationComplete, 1000)
      }
    })

    // Logo initial state and entrance
    gsap.set(logoRef.current, {
      opacity: 0,
      scale: 0.8
    })

    // Text initial state
    gsap.set(textRef.current, {
      opacity: 0,
      y: 40,
      scale: 0.9
    })

    // Logo fade in (8 seconds)
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 8,
      ease: "power2.out"
    })
    // Text fade in and animation (starts at 6 seconds)
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 3,
      ease: "power2.out"
    }, 6)

    // Create multiple waves of smoke for continuous effect
    const totalWaves = 3
    const puffsPerWave = Math.ceil(smokePuffRefs.current.length / totalWaves)
    
    smokePuffRefs.current.forEach((puff, i) => {
      const waveIndex = Math.floor(i / puffsPerWave)
      const angle = (i / puffsPerWave) * Math.PI * 2
      const distance = 60 + Math.random() * 60
      
      // Initial position around logo
      gsap.set(puff, {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance + 30,
        opacity: 0,
        scale: 0.2,
        filter: 'blur(0px)'
      })

      // Wave delay for continuous smoke effect
      const waveDelay = waveIndex * 8
      
      // First phase: Smoke emerges and rises (12 seconds)
      tl.to(puff, {
        x: `+=${Math.random() * 120 - 60}`,
        y: `-=${200 + Math.random() * 100}`,
        opacity: 0.7,
        scale: 1.2 + Math.random() * 0.8,
        filter: 'blur(10px)',
        duration: 12,
        ease: "power1.out"
      }, 4 + i * 0.4 + waveDelay)
      
      // Second phase: Smoke disperses and swirls (12 seconds)
      .to(puff, {
        x: `+=${Math.random() * 100 - 50}`,
        y: `-=${150 + Math.random() * 100}`,
        opacity: 0.3,
        scale: 2 + Math.random() * 1,
        filter: 'blur(20px)',
        duration: 12,
        ease: "sine.inOut"
      }, `-=6`)
      
      // Final phase: Elegant fade out (8 seconds)
      .to(puff, {
        opacity: 0,
        scale: 3,
        filter: 'blur(40px)',
        y: `-=${100}`,
        duration: 8,
        ease: "power3.in"
      }, `-=4`)
    })

    // Animate turbulence for organic smoke movement (32 seconds)
    if (turbulenceRef.current) {
      tl.to(turbulenceRef.current, {
        attr: { baseFrequency: 0.05 },
        duration: 16,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1
      }, 0)
    }

    // Subtle logo pulse while smoke rises (6 pulses over 30 seconds)
    tl.to(logoRef.current, {
      scale: 1.08,
      duration: 2.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 5
    }, 8)

    // Logo brightness increase before fade
    tl.to(logoRef.current, {
      filter: 'brightness(1.3)',
      duration: 3,
      ease: "power2.in"
    }, 33)

    // Text subtle glow before fade
    .to(textRef.current, {
      textShadow: '0 0 20px rgba(251, 191, 36, 0.8)',
      duration: 2,
      ease: "power2.in"
    }, 34)

    // Final elegant fade out (4 seconds)
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 4,
      ease: "power3.inOut"
    }, 36)

    return () => {
      tl.kill()
    }
  }, [onAnimationComplete])

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      {/* SVG Filters for smoke effects */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="smokeFilter">
            <feTurbulence 
              ref={turbulenceRef}
              type="fractalNoise" 
              baseFrequency="0.015" 
              numOctaves="4" 
              seed="5"
            />
            <feDisplacementMap in="SourceGraphic" scale="15" />
            <feGaussianBlur stdDeviation="2" />
          </filter>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Smoke container */}
      <div ref={smokeContainerRef} className="absolute inset-0 pointer-events-none">
        {/* Multiple smoke puffs for realistic effect */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            ref={el => smokePuffRefs.current[i] = el}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '200px',
              height: '200px',
              background: `radial-gradient(circle at center, 
                rgba(255, 255, 255, ${0.4 - i * 0.01}) 0%, 
                rgba(255, 255, 255, ${0.25 - i * 0.008}) 25%, 
                rgba(255, 255, 255, ${0.15 - i * 0.005}) 50%, 
                rgba(255, 255, 255, ${0.05 - i * 0.002}) 75%, 
                transparent 100%)`,
              mixBlendMode: 'screen',
              filter: 'url(#smokeFilter)'
            }}
          />
        ))}
      </div>

      {/* Main logo */}
      <div ref={logoRef} className="relative z-10" style={{ filter: 'url(#glow)' }}>
        <img 
          src={logoUrl}
          alt="Kushie Brand Logo"
          className="w-56 h-56 md:w-64 md:h-64 object-contain drop-shadow-[0_0_40px_rgba(251,191,36,0.6)]"
        />
      </div>
      
      {/* Text below logo */}
      <div ref={textRef} className="absolute bottom-20 left-0 right-0 z-20 text-center px-4" style={{ opacity: 0 }}>
        <p className="text-white text-2xl md:text-3xl font-light tracking-wide">
          Experience the finest hand-crafted cannabis products from Los Angeles.
        </p>
      </div>

      {/* Additional ambient smoke layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%)',
            filter: 'blur(60px)',
            opacity: 0.8
          }}
        />
      </div>
    </div>
  )
}

export default WelcomeAnimation