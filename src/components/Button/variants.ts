import { tokens } from "../../styles/tokens";

interface IButtonVariants {
  fontSize: keyof typeof tokens.font.size;
  lineHeight: keyof typeof tokens.line.height;
  borderRadius: keyof typeof tokens.radius.size;
  padding: keyof typeof tokens.spacing_squish.size;
  fontFamily: keyof typeof tokens.font.family;
  fontWeight: keyof typeof tokens.font.weight;
  color:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
  backgroundColor:
    | keyof typeof tokens.brand.color.primary
    | keyof typeof tokens.neutral.color;
}

export const variants = {
  primary: {
    fontSize: "xs",
    lineHeight: "tight",
    borderRadius: "none",
    padding: "xs",

    fontFamily: "highlight",
    fontWeight: "medium",
    color: "white",
    backgroundColor: "orange_500",
  } as IButtonVariants,
};
