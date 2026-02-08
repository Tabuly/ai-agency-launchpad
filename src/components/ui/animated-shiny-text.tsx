import { ComponentPropsWithoutRef, CSSProperties, FC } from "react"

import { cn } from "@/lib/utils"

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md text-xs text-gray-500 font-medium",
        // Required for bg-clip-text: text must be transparent for gradient to show through
        "text-transparent bg-clip-text",
        // Gradient must cover full text (300% width); animation sweeps the shine band across
        "bg-[length:300%_100%] bg-no-repeat animate-shiny-text",
        // Base color + brighter shine band that sweeps
        "bg-gradient-to-r from-neutral-700 via-neutral-400 to-neutral-700 dark:from-neutral-300 dark:via-white dark:to-neutral-300",

        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
