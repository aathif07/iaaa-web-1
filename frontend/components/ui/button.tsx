import React from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild, ...props }, ref) => {
    const baseStyles =
      'font-medium transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center'

    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      outline:
        'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
      ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    }

    const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`

    // If asChild is true, render children as-is with styles applied to parent
    if (asChild) {
      return (
        <div
          ref={ref as any}
          className={buttonClasses}
          {...(props as any)}
        />
      )
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
