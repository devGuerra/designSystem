import React from "react";

import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Subtitle } from "../../components/Subtitle";
import { Paragraph } from "../../components/Paragraph";
import { Shape } from "../../components/Shape";
import { SpacingStack } from "../../components/SpacingStack";

export const HomeScreen: React.FC = () => {
  return (
    <Shape>
      <Heading>HomeScreen</Heading>
      <Subtitle>Subtitle Small</Subtitle>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Paragraph>
      <Button alignSelf="flex-start">Button Label</Button>
    </Shape>
  );
};
