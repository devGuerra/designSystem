import { getFontFamily } from "../../src/utils/getFontFamily";

describe("utils/getLineHeightByFont", () => {
  describe("getLineHeightByFont", () => {
    it("should be return bold font family", () => {
      const fontFamily = "highlight"; // 20px
      const weight = "bold"; // 110%

      const lineHeightByFont = getFontFamily({ fontFamily, weight });

      expect(lineHeightByFont).toEqual("Archivo_700Bold");
    });

    it("should be return regular font family", () => {
      const fontFamily = "highlight"; // 20px
      const weight = "regular"; // 110%

      const lineHeightByFont = getFontFamily({ fontFamily, weight });

      expect(lineHeightByFont).toEqual("Archivo_400Regular");
    });

    it("should be return medium font family", () => {
      const fontFamily = "highlight"; // 20px
      const weight = "medium"; // 110%

      const lineHeightByFont = getFontFamily({ fontFamily, weight });

      expect(lineHeightByFont).toEqual("Archivo_500Medium");
    });
  });
});
