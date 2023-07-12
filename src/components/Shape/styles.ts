import { TouchableOpacityProps, ViewProps } from "react-native";
import styled from "styled-components/native";
import { tokens } from "../../styles/tokens";
import { variants } from "./variants";

interface Props extends ViewProps {
  borderRadiusItem?: keyof typeof tokens.radius.size;
  borderWidthItem?: keyof typeof tokens.border.size;
  paddingBox?: keyof typeof tokens.spacing.size;
  borderColor?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
  backgroundColor?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
}

export const Container = styled.View<Props>`
  border-radius: ${({ borderRadiusItem }) =>
    tokens.radius.size[borderRadiusItem]?.value};

  background-color: ${({ backgroundColor }) =>
    tokens.brand.color.primary[backgroundColor]?.value ||
    tokens.neutral.color[backgroundColor]?.value};

  border-width: ${({ borderWidthItem }) =>
    tokens.border.size[borderWidthItem]?.value};

  padding: ${({ paddingBox }) => tokens.spacing.size[paddingBox]?.value};

  border-color: ${({ borderColor }) =>
    tokens.brand.color.primary[borderColor]?.value ||
    tokens.neutral.color[borderColor]?.value};
`;
