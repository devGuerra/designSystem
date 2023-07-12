import React from "react";

import { ViewProps } from "react-native";
import { tokens } from "../../styles/tokens";
import { variants } from "./variants";
import { Container } from "./styles";

interface ShapeProps extends ViewProps {
  borderRadius?: keyof typeof tokens.radius.size;
  borderWidth?: keyof typeof tokens.border.size;
  paddingBox?: keyof typeof tokens.spacing.size;
  borderColor?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
  backgroundColor?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
  variant?: keyof typeof variants;
}

export const Shape: React.FC<ShapeProps> = ({
  variant = "default",
  borderRadius,
  borderWidth,
  paddingBox,
  backgroundColor,
  borderColor,
  children,
  ...rest
}) => {
  return (
    <Container
      borderRadius={borderRadius || variants[variant].borderRadius}
      borderWidth={borderWidth || variants[variant].borderWidth}
      backgroundColor={backgroundColor || variants[variant].backgroundColor}
      paddingBox={paddingBox || variants[variant].padding}
      borderColor={borderColor || variants[variant].borderColor}
      {...rest}
    >
      {children}
    </Container>
  );
};
