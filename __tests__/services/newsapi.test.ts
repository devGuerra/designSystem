import { newsApi } from "../../src/services/newsApi/api";
import { getArticlesBySearchTerm } from "../../src/services/newsApi/getArticlesBySearchTerm";

jest.mock("../../src/services/newsApi/api.ts");

const mockArticles = [
  {
    title: "noticia 1",
    description: "this is a description",
    ur: "https://www.google.com",
    content: "this is a content",
  },
];

const mockRequest = (retorno) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: retorno,
      });
    }, 200);
  });
};

const mockRequestError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  });
};

describe("services/newsapi", () => {
  const mockApi = newsApi as jest.Mocked<typeof newsApi>;

  beforeEach(() => {
    mockApi.get.mockClear();
  });

  describe("getNews", () => {
    it("should be return news", async () => {
      mockApi.get.mockImplementation(() => mockRequest(mockArticles));

      const articles = await getArticlesBySearchTerm("test");

      expect(articles).toEqual(mockArticles);

      expect(mockApi.get).toHaveBeenCalledTimes(1);

      expect(mockApi.get).toHaveBeenCalledWith("/everything", {
        params: {
          q: "test",
          apiKey: process.env.NEWS_API_TOKEN,
        },
      });
    });

    it("should be return error", async () => {
      mockApi.get.mockImplementation(() => mockRequestError());

      const articles = await getArticlesBySearchTerm("test");

      expect(articles).toEqual([]);
    });
  });
});
