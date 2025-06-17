import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Initialize GSAP with default settings
export const initGSAP = () => {
  gsap.defaults({
    ease: 'power3.out',
    duration: 1
  })

  // Refresh ScrollTrigger on resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh()
  })
}

// Hero animations
export const animateHero = (elements) => {
  const tl = gsap.timeline()
  
  if (elements.title) {
    tl.fromTo(elements.title,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
  }
  
  if (elements.subtitle) {
    tl.fromTo(elements.subtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5'
    )
  }
  
  if (elements.cta) {
    tl.fromTo(elements.cta,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.3'
    )
  }
  
  return tl
}

// Fade in animation with scroll trigger
export const fadeInOnScroll = (element, options = {}) => {
  const defaults = {
    opacity: 0,
    y: 50,
    duration: 1,
    ...options
  }
  
  gsap.fromTo(element, 
    { opacity: defaults.opacity, y: defaults.y },
    {
      opacity: 1,
      y: 0,
      duration: defaults.duration,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...options.scrollTrigger
      }
    }
  )
}

// Stagger animation for multiple elements
export const staggerFadeIn = (elements, options = {}) => {
  const defaults = {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.1,
    ...options
  }
  
  gsap.fromTo(elements,
    { opacity: defaults.opacity, y: defaults.y },
    {
      opacity: 1,
      y: 0,
      duration: defaults.duration,
      stagger: defaults.stagger,
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        ...options.scrollTrigger
      }
    }
  )
}

// Parallax effect
export const parallaxEffect = (element, speed = 0.5) => {
  gsap.to(element, {
    yPercent: -100 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  })
}

// Infinite horizontal scroll
export const infiniteScroll = (element, duration = 30) => {
  const scrollWidth = element.scrollWidth
  
  gsap.to(element, {
    x: -scrollWidth / 2,
    duration: duration,
    ease: 'none',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % (scrollWidth / 2))
    }
  })
}

// Mouse follow effect
export const mouseFollowEffect = (element, intensity = 0.1) => {
  let mouseX = 0
  let mouseY = 0
  
  const handleMouseMove = (e) => {
    const rect = element.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    mouseX = (e.clientX - centerX) * intensity
    mouseY = (e.clientY - centerY) * intensity
    
    gsap.to(element, {
      x: mouseX,
      y: mouseY,
      duration: 0.5,
      ease: 'power2.out'
    })
  }
  
  window.addEventListener('mousemove', handleMouseMove)
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
  }
}

// Text reveal animation
export const textReveal = (element, options = {}) => {
  const defaults = {
    duration: 1.5,
    delay: 0,
    ...options
  }
  
  const words = element.textContent.split(' ')
  element.innerHTML = words.map(word => `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`).join(' ')
  
  const spans = element.querySelectorAll('span span')
  
  gsap.fromTo(spans,
    { y: '100%' },
    {
      y: 0,
      duration: defaults.duration,
      delay: defaults.delay,
      stagger: 0.05,
      ease: 'power4.out'
    }
  )
}

// Scale on hover
export const scaleOnHover = (element, scale = 1.05) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      scale: scale,
      duration: 0.3,
      ease: 'power2.out'
    })
  })
  
  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  })
}

// Loading animation
export const loadingAnimation = (element) => {
  const tl = gsap.timeline({ repeat: -1 })
  
  tl.to(element, {
    rotation: 360,
    duration: 1,
    ease: 'none'
  })
  
  return tl
}

// Page transition
export const pageTransition = (entering, leaving) => {
  const tl = gsap.timeline()
  
  if (leaving) {
    tl.to(leaving, {
      opacity: 0,
      y: -50,
      duration: 0.5
    })
  }
  
  if (entering) {
    tl.fromTo(entering,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
  }
  
  return tl
}