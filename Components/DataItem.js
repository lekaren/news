import React from "react";
import moment from "moment";
import { ListItem, Thumbnail, Left, Body, Right, Button } from "native-base";
import { Text, View } from "react-native";
export default function DataItem({ article, handleModalOpen }) {
  const viewModal = () => {
    handleModalOpen({
      title: article.title,
      url: article.url,
    });
  };
  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          square
          source={{
            uri:
              article.urlToImage ||
              "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png",
          }}
        />
      </Left>
      <Body>
        <Text numberOfLines={2}>{article.title}</Text>
        <Text note numberOfLines={2}>
          {article.description}
        </Text>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
          <Text note>{article.source.name}</Text>
          <Text note>{moment(article.publishedAt || moment.now).fromNow()}</Text>
        </View>
      </Body>
      <Right>
        <Button transparent onPress={viewModal}>
          <Text>보기</Text>
        </Button>
      </Right>
    </ListItem>
  );
}