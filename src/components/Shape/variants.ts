import { tokens } from "../../styles/tokens";

interface IShapeVariants {
  borderRadius?: keyof typeof tokens.radius.size;
  padding?: keyof typeof tokens.spacing.size;
  borderWidth?: keyof typeof tokens.border.size;
  borderColor?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
  backgroundColor?:
    | keyof typeof tokens.neutral.color
    | keyof typeof tokens.brand.color.primary;
}

export const variants = {
  default: {
    borderRadius: "none",
    padding: "lg",
    borderWidth: "thin",
    backgroundColor: "white",
    borderColor: "gray_200",
  } as IShapeVariants,
};
