import { tokens } from "../styles/tokens";

interface Props {
  size?: keyof typeof tokens.font.size;
  lineHeight?: keyof typeof tokens.line.height;
}

export const getLineHeightByFont = ({ lineHeight, size }: Props) => {
  const sizeValue = tokens.font.size[size].value.replace(/[^0-9]/g, "");
  const lineHeightValue = tokens.line.height[lineHeight].value.replace(
    /[^0-9]/g,
    ""
  );

  const realLineHeight = (Number(lineHeightValue) * Number(sizeValue)) / 100;

  return realLineHeight;
};
