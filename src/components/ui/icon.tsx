// components/ui/icon.tsx
"use client"

import * as React from "react"
import { LucideIcon } from "lucide-react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>
  className?: string
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, className, ...props }, ref) => {
    return (
      <IconComponent
        className={className}
        ref={ref}
        {...props}
      />
    )
  }
)
Icon.displayName = "Icon"

export { Icon }