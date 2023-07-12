import React from "react";

import { ViewProps } from "react-native";
import { tokens } from "../../styles/tokens";
import { Container } from "./styles";

interface ShapeProps extends ViewProps {
  spacing?: keyof typeof tokens.spacing.size;
}

export const SpacingStack: React.FC<ShapeProps> = ({
  spacing,
  children,
  ...rest
}) => {
  return (
    <Container spacing={spacing} {...rest}>
      {children}
    </Container>
  );
};
