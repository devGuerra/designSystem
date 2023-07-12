import React from "react";

import { Text } from "./styles";
import { TextProps } from "react-native";
import { tokens } from "../../styles/tokens";

interface TypographyProps extends TextProps {
  size?: keyof typeof tokens.font.size;
  weight?: keyof typeof tokens.font.weight;
  align?: "center" | "left" | "right";
  color?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
  lineHeight?: keyof typeof tokens.line.height;
}

export const Typography: React.FC<TypographyProps> = ({
  size = "md",
  weight = "regular",
  color = "black",
  align = "left",
  lineHeight = "tight",
  children,
  ...rest
}) => {
  const sizeValue = Number(tokens.font.size[size].value.replace("px", ""));
  const lineHeightValue = Number(
    tokens.line.height[lineHeight].value.replace("%", "")
  );

  const realLineHeight = (lineHeightValue * sizeValue) / 100;

  console.log("realLineHeight", realLineHeight);

  return (
    <Text
      size={size}
      weight={weight}
      color={color}
      align={align}
      lineHeight={realLineHeight}
      {...rest}
    >
      {children}
    </Text>
  );
};
