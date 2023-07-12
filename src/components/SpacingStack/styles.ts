import { ViewProps } from "react-native";
import styled from "styled-components/native";
import { tokens } from "../../styles/tokens";

interface Props extends ViewProps {
  spacing?: keyof typeof tokens.spacing.size;
}

export const Container = styled.View<Props>`
  height: ${({ spacing }) => tokens.spacing.size[spacing]?.value};
  width: 100%;
`;
