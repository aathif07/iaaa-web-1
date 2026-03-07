"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Hook for scroll reveal animations using Intersection Observer
 * Triggers when element enters viewport
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1
) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return { ref, isVisible }
}

/**
 * Hook for parallax scroll effect
 * Elements move slower than scroll speed, creating depth
 * @param speed - Parallax speed (0.1 to 1, where 0.5 is half speed)
 */
export function useParallax(speed = 0.5) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY
        const elementTop = ref.current.getBoundingClientRect().top
        const elementBottom = ref.current.getBoundingClientRect().bottom

        // Only apply parallax when element is in view
        if (elementBottom > 0 && elementTop < window.innerHeight) {
          setOffset(scrollY * speed)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return { ref, offset }
}

/**
 * Hook for 3D tilt effect on mouse move
 * Creates perspective rotation based on cursor position
 */
export function use3DTilt() {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return

      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const x = (e.clientY - centerY) / (rect.height / 2) * -12
      const y = (e.clientX - centerX) / (rect.width / 2) * 12

      setRotation({ x, y })
    }

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 })
    }

    document.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)
    element.addEventListener("mouseenter", () => setIsHovering(true))

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isHovering])

  return {
    ref,
    style: {
      transform: `perspective(600px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(20px)`,
      transition: "transform 0.1s ease-out",
    },
  }
}

/**
 * Hook for animated count-up numbers
 * Counts from 0 to target number when element enters viewport
 * @param target - Target number to count to
 * @param duration - Animation duration in milliseconds
 */
export function useCountUp(target: number, duration = 1000) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      const currentCount = Math.floor(startValue + (target - startValue) * progress)
      setCount(currentCount)

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isVisible, target, duration])

  return { ref, count }
}

/**
 * Hook for staggered element reveals
 * Reveals multiple children with animation delays
 */
export function useStaggerReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  useEffect(() => {
    if (!isVisible || !ref.current) return

    const children = Array.from(ref.current.children) as HTMLElement[]
    children.forEach((child, index) => {
      child.classList.add("reveal")
      const timer = setTimeout(() => {
        child.classList.add("visible")
      }, index * 100)
      return () => clearTimeout(timer)
    })
  }, [isVisible])

  return { ref, isVisible }
}
