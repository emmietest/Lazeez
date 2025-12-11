import React, { useRef, useCallback } from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden transform-gpu motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-[cubic-bezier(.2,.9,.2,1)] will-change-transform hover:scale-105 active:scale-95 shadow-sm",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground sheen-variant-outline",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground sheen-variant-ghost",
        gradient: "variant-gradient sheen-variant-gradient shadow hover:brightness-95",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, onMouseDown, ...props }, ref) => {
    const innerRef = useRef<HTMLElement | null>(null)

    const setRef = useCallback((el: any) => {
      innerRef.current = el
      if (!ref) return
      if (typeof ref === 'function') ref(el)
      else (ref as React.MutableRefObject<any>).current = el
    }, [ref])

    const handleMouseDown: React.MouseEventHandler = (e) => {
      try {
        const el = innerRef.current as HTMLElement | null
        if (el) {
          const rect = el.getBoundingClientRect()
          const size = Math.max(rect.width, rect.height)
          const ripple = document.createElement('span')
          ripple.className = 'ripple'
          ripple.style.width = `${size}px`
          ripple.style.height = `${size}px`
          ripple.style.left = `${e.clientX - rect.left - size / 2}px`
          ripple.style.top = `${e.clientY - rect.top - size / 2}px`
          el.appendChild(ripple)
          window.setTimeout(() => ripple.remove(), 600)
        }
      } catch (err) {
        // swallow DOM errors
      }

      if (onMouseDown) onMouseDown(e)
    }

    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={setRef as any}
        onMouseDown={handleMouseDown}
        {...props}
      >
        {children}
        <span aria-hidden className={`absolute inset-0 pointer-events-none btn-sheen ${
          variant === 'gradient' ? 'sheen-variant-gradient' : variant === 'outline' ? 'sheen-variant-outline' : variant === 'ghost' ? 'sheen-variant-ghost' : ''
        }`} />
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
