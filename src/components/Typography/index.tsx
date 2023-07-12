import React from "react";

import { Text } from "./styles";
import { TextProps } from "react-native";
import { tokens } from "../../styles/tokens";
import { getLineHeightByFont } from "../utils/getLineHeightByFont";

interface TypographyProps extends TextProps {
  size?: keyof typeof tokens.font.size;
  weight?: keyof typeof tokens.font.weight;
  align?: "center" | "left" | "right";
  color?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
  lineHeight?: keyof typeof tokens.line.height;
  fontFamily?: keyof typeof tokens.font.family;
}

export const Typography: React.FC<TypographyProps> = ({
  size = "md",
  weight = "regular",
  color = "black",
  align = "left",
  lineHeight = "tight",
  fontFamily,
  children,
  ...rest
}) => {
  const realLineHeight = getLineHeightByFont({
    size,
    lineHeight,
  });

  return (
    <Text
      size={size}
      weight={weight}
      color={color}
      align={align}
      lineHeight={realLineHeight}
      fontFamily={fontFamily}
      {...rest}
    >
      {children}
    </Text>
  );
};
