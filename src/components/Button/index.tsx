import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Typography } from "../Typography";
import { tokens } from "../../styles/tokens";
import { Container } from "./styles";
import { variants } from "./variants";

interface ButtonProps extends TouchableOpacityProps {
  borderRadius?: keyof typeof tokens.radius.size;
  padding?: keyof typeof tokens.spacing_squish.size;
  backgroundColor?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
  variant?: keyof typeof variants;
  alignSelf?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  borderRadius,
  padding,
  backgroundColor,
  alignSelf = "stretch",
  children,
  ...rest
}) => {
  return (
    <Container
      backgroundColor={backgroundColor || variants[variant].backgroundColor}
      borderRadius={borderRadius || variants[variant].borderRadius}
      padding={padding || variants[variant].padding}
      variant={variant}
      alignSelf={alignSelf}
      {...rest}
    >
      <Typography
        size={variants[variant].fontSize}
        lineHeight={variants[variant].lineHeight}
        weight={variants[variant].fontWeight}
        color={variants[variant].color}
      >
        {children}
      </Typography>
    </Container>
  );
};
