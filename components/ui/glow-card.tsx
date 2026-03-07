"use client"

import { ReactNode } from "react"
import { use3DTilt } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface GlowCardProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "accent" | "subtle"
  tilt?: boolean
  animated?: boolean
}

export function GlowCard({
  children,
  className,
  variant = "primary",
  tilt = false,
  animated = true,
}: GlowCardProps) {
  const { ref: tiltRef, style: tiltStyle } = use3DTilt()

  const variantStyles = {
    primary: "border-glow",
    accent: "border-glow-accent",
    subtle: "border border-border/50",
  }

  const baseStyles = cn(
    "relative rounded-xl p-6 transition-all duration-300",
    "glass",
    variantStyles[variant],
    animated && "hover:shadow-2xl",
    className
  )

  if (tilt) {
    return (
      <div
        ref={tiltRef}
        style={tiltStyle as React.CSSProperties}
        className={baseStyles}
      >
        {children}
      </div>
    )
  }

  return <div className={baseStyles}>{children}</div>
}
