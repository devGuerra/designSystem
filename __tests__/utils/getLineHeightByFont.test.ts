import { getLineHeightByFont } from "../../src/utils/getLineHeightByFont";

describe("utils/getLineHeightByFont", () => {
  describe("getLineHeightByFont", () => {
    it("should be return  110% from SM font", () => {
      const size = "sm"; // 20px
      const lineHeight = "medium"; // 110%

      const lineHeightByFont = getLineHeightByFont({ size, lineHeight });

      expect(lineHeightByFont).toEqual(22);
    });
  });
});
