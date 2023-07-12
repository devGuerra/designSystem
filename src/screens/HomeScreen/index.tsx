import React, { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Subtitle } from "../../components/Subtitle";
import { Paragraph } from "../../components/Paragraph";
import { Shape } from "../../components/Shape";
import { getArticlesBySearchTerm } from "../../services/newsApi/getArticlesBySearchTerm";
import { Alert, FlatList, Linking } from "react-native";
import { Loading } from "../../components/Loading";

interface Article {
  title: string;
  description: string;
  url: string;
  content: string;
}

export const HomeScreen: React.FC = () => {
  const [articles, setArticles] = useState<Article[] | []>([]);
  const [loding, setLoding] = useState<boolean>(true);

  useEffect(() => {
    getArticlesBySearchTerm("bitcoin").then((response) => {
      setArticles(response.articles);
      setLoding(false);
    });
  }, []);

  async function openArticle(url: string) {
    Alert.alert("Open Article", "Do you want to open this article?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Open",
        onPress: () => Linking.openURL(url),
      },
    ]);
  }

  if (loding) {
    return <Loading />;
  }

  return (
    <>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Shape>
            <Heading>{item.title}</Heading>
            <Subtitle>{item.description}</Subtitle>
            <Paragraph>{item.content}</Paragraph>
            <Button
              alignSelf="flex-start"
              onPress={() => openArticle(item.url)}
            >
              Read More
            </Button>
          </Shape>
        )}
        keyExtractor={(item) => item.url}
      />
    </>
  );
};
