"use client"

import { ReactNode } from "react"
import { use3DTilt } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

interface PremiumCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "elevated" | "outlined" | "filled"
  tilt?: boolean
  icon?: ReactNode
  title?: string
  description?: string
  footer?: ReactNode
}

export function PremiumCard({
  children,
  className,
  variant = "default",
  tilt = false,
  icon,
  title,
  description,
  footer,
}: PremiumCardProps) {
  const { ref: tiltRef, style: tiltStyle } = use3DTilt()

  const variantStyles = {
    default: "bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg",
    elevated: "bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-sm hover:shadow-xl",
    outlined: "bg-transparent border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50/30",
    filled: "bg-slate-50 border border-slate-300 hover:bg-slate-100",
  }

  const baseStyles = cn(
    "rounded-2xl p-6 transition-all duration-300",
    "hover:scale-105 hover:translate-y-[-2px]",
    variantStyles[variant],
    className
  )

  const content = (
    <div className="flex flex-col h-full gap-4">
      {/* Header Section */}
      {(icon || title) && (
        <div className="flex items-start gap-4">
          {icon && (
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center text-blue-500">
              {icon}
            </div>
          )}
          {title && (
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-slate-900 text-lg leading-tight">{title}</h3>
              {description && (
                <p className="text-sm text-slate-500 mt-1 line-clamp-2">{description}</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="pt-4 border-t border-slate-200">
          {footer}
        </div>
      )}
    </div>
  )

  if (tilt) {
    return (
      <div
        ref={tiltRef}
        style={tiltStyle as React.CSSProperties}
        className={baseStyles}
      >
        {content}
      </div>
    )
  }

  return <div className={baseStyles}>{content}</div>
}
