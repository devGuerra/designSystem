import React from "react";

import { Container } from "./styles";
import { ActivityIndicator } from "react-native";

export const Loading: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator size="small" color="#000" />
    </Container>
  );
};
