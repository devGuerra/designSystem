import { tokens } from "../../styles/tokens";

interface IParagraphVariants {
  fontSize: keyof typeof tokens.font.size;
  lineHeight: keyof typeof tokens.line.height;
  fontFamily: keyof typeof tokens.font.family;
  fontWeight: keyof typeof tokens.font.weight;
  color:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
}

export const variants = {
  default: {
    fontSize: "xs",
    lineHeight: "distant",

    fontFamily: "highlight",
    fontWeight: "regular",
    color: "gray_600",
  } as IParagraphVariants,
};
