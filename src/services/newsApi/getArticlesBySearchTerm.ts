import { NEWS_API_TOKEN } from "@env";

import { newsApi } from "./api";

interface Article {
  title: string;
  description: string;
  url: string;
  content: string;
}

interface GetArticlesBySearchTermResponse {
  articles: Article[];
}

export const getArticlesBySearchTerm = async (
  searchTerm: string
): Promise<GetArticlesBySearchTermResponse> => {
  try {
    const results = await newsApi.get<GetArticlesBySearchTermResponse>(
      "/everything",
      {
        params: {
          q: searchTerm,
          apiKey: NEWS_API_TOKEN,
        },
      }
    );

    return results.data;
  } catch (error) {
    return [] as any;
  }
};
