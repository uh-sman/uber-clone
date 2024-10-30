import React from "react";
import { Text } from "react-native"
const TextComponent = ({
  children,
  color = "secondary",
  className = "",
  size = "md",
  weight = "normal",
}: {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "white";
  className?: string;
  size?: "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs";
  weight?: "normal" | "bold" | "semibold";
}) => {
  const variant = {
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      white: "text-white",
    },
    size: {
      "4xl": "text-[50px] leading-[105%] tracking-[-1.5px]",
      "3xl": "text-[42px] leading-[115%] tracking-[-1.26px]",
      "2xl": "text-[30px] leading-[105%] tracking-[-0.9px]",
      xl: "text-[24px] leading-[105%] tracking-[-0.9px]",
      lg: "text-[19px] leading-[140%] tracking-[-0.19px]",
      md: "text-[17px] leading-[160%] tracking-[-0.17px]",
      sm: "text-[15px] leading-[160%] tracking-[-0.15px]",
      xs: "text-[13px] leading-[160%] tracking-[-0.13px]",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
      semibold: "font-semibold",
    },
  };
  return (
    <Text
      className={`${variant?.color?.[color] ?? ""} ${
        variant?.weight?.[weight] ?? ""
      } ${variant?.size?.[size] ?? ""} ${className}`}
    >
      {children}
    </Text>
  );
};

export default TextComponent;
