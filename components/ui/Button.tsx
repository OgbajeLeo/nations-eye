import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "accent";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-[2px] active:translate-x-[2px]",
          {
            "bg-primary-600 text-white hover:bg-primary-500 border-2 border-r-4 border-b-4 border-primary-950": variant === "default",
            "bg-accent-600 text-white hover:bg-accent-500 border-2 border-r-4 border-b-4 border-primary-950": variant === "accent",
            "bg-transparent text-primary-600 hover:bg-primary-50 border-2 border-r-4 border-b-4 border-primary-950": variant === "outline",
            "hover:bg-primary-50 text-primary-600 border-2 border-transparent": variant === "ghost",
            "text-primary-600 underline-offset-4 hover:underline border-2 border-transparent": variant === "link",
            "h-11 px-5 py-2": size === "default",
            "h-9 px-3 text-xs": size === "sm",
            "h-14 px-8 text-base": size === "lg",
            "h-11 w-11": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
