import { tokens } from "../../styles/tokens";

export const variants: {
  [key: string]: {
    fontSize: keyof typeof tokens.font.size;
    lineHeight: keyof typeof tokens.line.height;
    fontFamily: keyof typeof tokens.font.family;
    fontWeight: keyof typeof tokens.font.weight;
    color:
      | keyof typeof tokens.neutral.color
      | keyof typeof tokens.brand.color.primary;
  };
} = {
  small: {
    fontSize: "md",
    lineHeight: "medium",

    fontFamily: "highlight",
    fontWeight: "medium",
    color: "gray_600",
  },
};
