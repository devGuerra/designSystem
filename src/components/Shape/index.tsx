import React from "react";

import { ViewProps } from "react-native";
import { tokens } from "../../styles/tokens";
import { variants } from "./variants";
import { Container } from "./styles";

interface ShapeProps extends ViewProps {
  borderRadiusItem?: keyof typeof tokens.radius.size;
  borderWidthItem?: keyof typeof tokens.border.size;
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
  borderRadiusItem,
  borderWidthItem,
  paddingBox,
  backgroundColor,
  borderColor,
  children,
  ...rest
}) => {
  return (
    <Container
      borderRadiusItem={borderRadiusItem || variants[variant].borderRadius}
      borderWidthItem={borderWidthItem || variants[variant].borderWidth}
      backgroundColor={backgroundColor || variants[variant].backgroundColor}
      paddingBox={paddingBox || variants[variant].padding}
      borderColor={borderColor || variants[variant].borderColor}
      {...rest}
    >
      {children}
    </Container>
  );
};
