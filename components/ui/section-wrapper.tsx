"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  pattern?: "dots" | "grid" | "diagonal" | "none"
  variant?: "default" | "primary" | "muted" | "dark"
}

export function SectionWrapper({
  children,
  className,
  id,
  pattern = "none",
  variant = "default",
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation()

  const bgVariants = {
    default: "bg-background",
    primary: "bg-primary text-primary-foreground",
    muted: "bg-muted",
    dark: "bg-foreground text-background",
  }

  const patternClass = pattern !== "none" ? `bg-pattern-${pattern}` : ""

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative py-16 md:py-24 overflow-hidden",
        bgVariants[variant],
        className
      )}
    >
      {pattern !== "none" && (
        <div
          className={cn(
            "absolute inset-0 pointer-events-none",
            patternClass,
            variant === "default" || variant === "muted"
              ? "text-primary/5"
              : "text-background/10"
          )}
        />
      )}
      <div
        className={cn(
          "relative z-10 container mx-auto px-4 md:px-6",
          isVisible ? "animate-fade-up" : "opacity-0"
        )}
      >
        {children}
      </div>
    </section>
  )
}
