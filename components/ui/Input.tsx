import * as React from "react"
// import * as React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { cn } from "@/lib/utils"


// Define InputProps extending from TextInput's props
export interface InputProps extends TextInputProps {}

// Create a functional component with forwardRef
const Input = React.forwardRef<TextInput, InputProps>(
  ({ className, style, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        className={cn(
            "flex w-full rounded-md border border-input px-3 py-1 text-sm bg-transparent transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
        {...props}
      />
    );
  }
);

// Display name for the component
Input.displayName = "Input";

// Define styles using StyleSheet.create

export { Input };



