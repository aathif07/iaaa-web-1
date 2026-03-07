"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

interface SimpleCardProps {
  title: string
  description?: string
  icon?: LucideIcon
  children?: ReactNode
  className?: string
  variant?: "default" | "bordered" | "elevated" | "minimal"
  href?: string
}

export function SimpleCard({
  title,
  description,
  icon: Icon,
  children,
  className,
  variant = "default",
  href,
}: SimpleCardProps) {
  const variantStyles = {
    default: "bg-card border border-border",
    bordered: "bg-transparent border-2 border-primary/20 hover:border-primary/40",
    elevated: "bg-card shadow-lg hover:shadow-xl",
    minimal: "bg-transparent",
  }

  const Wrapper = href ? "a" : "div"
  const wrapperProps = href ? { href } : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        "block p-6 rounded-lg transition-all duration-300",
        variantStyles[variant],
        href && "cursor-pointer hover:-translate-y-1",
        className
      )}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      {description && (
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      )}
      {children}
    </Wrapper>
  )
}

interface StatCardProps {
  value: string
  label: string
  icon?: LucideIcon
  className?: string
}

export function StatCard({ value, label, icon: Icon, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "text-center p-6 rounded-lg bg-card border border-border",
        className
      )}
    >
      {Icon && (
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
