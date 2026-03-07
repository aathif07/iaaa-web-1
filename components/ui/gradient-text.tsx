import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "wide" | "accent"
}

export function GradientText({
  children,
  className,
  variant = "primary",
}: GradientTextProps) {
  const variantStyles = {
    primary: "gradient-text",
    wide: "gradient-text-wide",
    accent: "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent",
  }

  return (
    <span className={cn(variantStyles[variant], className)}>
      {children}
    </span>
  )
}
