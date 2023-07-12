import { TouchableOpacityProps, ViewProps } from "react-native";
import styled from "styled-components/native";
import { tokens } from "../../styles/tokens";
import { variants } from "./variants";

interface Props extends ViewProps {
  borderRadius?: keyof typeof tokens.radius.size;
  borderWidth?: keyof typeof tokens.border.size;
  paddingBox?: keyof typeof tokens.spacing.size;
  borderColor?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
  backgroundColor?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
}

export const Container = styled.View<Props>`
  border-radius: ${({ borderRadius }) =>
    tokens.radius.size[borderRadius]?.value};

  background-color: ${({ backgroundColor }) =>
    tokens.brand.color.primary[backgroundColor]?.value ||
    tokens.neutral.color[backgroundColor]?.value};

  border-width: ${({ borderWidth }) => tokens.border.size[borderWidth]?.value};

  padding: ${({ paddingBox }) => tokens.spacing.size[paddingBox]?.value};

  border-color: ${({ borderColor }) =>
    tokens.brand.color.primary[borderColor]?.value ||
    tokens.neutral.color[borderColor]?.value};
`;
