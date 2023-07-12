import styled from "styled-components/native";
import { TextProps } from "react-native";
import { tokens } from "../../styles/tokens";

interface Props extends TextProps {
  size?: keyof typeof tokens.font.size;
  weight?: keyof typeof tokens.font.weight;
  color?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
  align?: "center" | "left" | "right";
  lineHeight?: number;
}

export const Text = styled.Text<Props>`
  font-weight: ${({ weight }) => tokens.font.weight[weight].value};
  font-size: ${({ size }) => tokens.font.size[size].value};
  color: ${({ color }) => tokens.neutral.color[color].value};
  text-align: ${({ align }) => align || "left"};
  line-height: ${({ lineHeight }) => lineHeight}px;
`;
