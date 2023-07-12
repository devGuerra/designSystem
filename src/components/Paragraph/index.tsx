import React from "react";

import { Typography } from "../Typography";
import { TextProps } from "react-native";
import { tokens } from "../../styles/tokens";
import { variants } from "./variants";
import { SpacingStack } from "../SpacingStack";

interface ParagraphProps extends TextProps {
  size?: keyof typeof tokens.font.size;
  fontWeight?: keyof typeof tokens.font.weight;
  color?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
  lineHeight?: keyof typeof tokens.line.height;
  fontFamily?: keyof typeof tokens.font.family;
  variant?: keyof typeof variants;
}

export const Paragraph: React.FC<ParagraphProps> = ({
  variant = "default",
  size,
  fontWeight,
  color,
  lineHeight,
  fontFamily,
  children,
  ...rest
}) => {
  return (
    <>
      <Typography
        size={size || variants[variant].fontSize}
        weight={fontWeight || variants[variant].fontWeight}
        color={color || variants[variant].color}
        lineHeight={lineHeight || variants[variant].lineHeight}
        fontFamily={fontFamily || variants[variant].fontFamily}
        {...rest}
      >
        {children}
      </Typography>
      <SpacingStack spacing="sm" />
    </>
  );
};
