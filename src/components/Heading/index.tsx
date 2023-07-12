import React from "react";

import { Typography } from "../Typography";
import { TextProps } from "react-native";
import { tokens } from "../../styles/tokens";
import { SpacingStack } from "../SpacingStack";

interface HeadingProps extends TextProps {
  size?: keyof typeof tokens.font.size;
  fontWeight?: keyof typeof tokens.font.weight;
  color?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
  lineHeight?: keyof typeof tokens.line.height;
  fontFamily?: keyof typeof tokens.font.family;
}

export const Heading: React.FC<HeadingProps> = ({
  size = "lg",
  fontWeight = "bold",
  color = "black",
  lineHeight = "distant",
  fontFamily = "highlight",
  children,
  ...rest
}) => {
  return (
    <>
      <Typography
        size={size}
        weight={fontWeight}
        color={color}
        lineHeight={lineHeight}
        fontFamily={fontFamily}
        {...rest}
      >
        {children}
      </Typography>
      <SpacingStack spacing="xxxs" />
    </>
  );
};
