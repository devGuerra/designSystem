import { tokens } from "../../styles/tokens";

interface Props {
  weight?: keyof typeof tokens.font.weight;
  fontFamily?: keyof typeof tokens.font.family;
}

export const getFontFamily = ({ fontFamily = "highlight", weight }: Props) => {
  if (fontFamily === "highlight") {
    switch (weight) {
      case "bold":
        return "Archivo_700Bold";
      case "medium":
        return "Archivo_500Medium";
      default:
        return "Archivo_400Regular";
    }
  }
};
