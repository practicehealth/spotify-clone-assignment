import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils";

const buttonVariants = cva(
  "inline-flex items-center rounded-3xl justify-center font-semibold hover:scale-105 transition-all duration-150",
  {
    variants: {
      variant: {
        default: "bg-white text-black",
        outline:
          "border border-input text-white hover:border-white hover:border-2",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        link: "text-secondary hover:text-white",
        primary: "bg-indigo-500 text-white hover:bg-indigo-500/90",
      },
      size: {
        default: "px-4 py-1",
        sm: "px-5 py-1.5",
        lg: "px-6 py-3",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props },ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
