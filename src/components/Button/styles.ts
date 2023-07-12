import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import { tokens } from "../../styles/tokens";
import { variants } from "./variants";

interface Props extends TouchableOpacityProps {
  borderRadius?: keyof typeof tokens.radius.size;
  padding?: keyof typeof tokens.spacing_squish.size;
  backgroundColor?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
  variant?: keyof typeof variants;
  alignSelf?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
}

export const Container = styled.TouchableOpacity<Props>`
  border-radius: ${({ borderRadius }) =>
    tokens.radius.size[borderRadius]?.value};

  background-color: ${({ backgroundColor }) =>
    tokens.brand.color.primary[backgroundColor]?.value ||
    tokens.neutral.color[backgroundColor]?.value};

  padding: ${({ padding }) => tokens.spacing_squish.size[padding]?.stack.value};

  justify-content: center;
  align-items: center;

  align-self: ${({ alignSelf }) => alignSelf};
`;
