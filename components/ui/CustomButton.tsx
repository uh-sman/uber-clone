import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-gray-400 bg-transparent shadow-sm hover:bg-transparent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-12",
        full: "h-13 w-full rounded-md py-4",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ComponentProps<typeof TouchableOpacity>, VariantProps<typeof buttonVariants> {
  // No need for `asChild` since we are using only `TouchableOpacity`
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "default",
  size = "default",
  ...props
}) => {
  const combinedStyles = clsx(buttonVariants({ variant, size, className }));

  return (
    <TouchableOpacity
    className={combinedStyles}
      // style={combinedStyles} // Apply combined styles directly
      {...props}
    >
      {props.children}
    </TouchableOpacity>
  );
};

Button.displayName = "Button";

export { Button, buttonVariants };
