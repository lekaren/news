import React from "react";
import { Share, Modal, Dimensions } from "react-native";
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Title,
  Icon,
  Button,
} from "native-base";
import { WebView } from "react-native-webview";
function ModalView({ viewModal, articleData, onClose }) {
  const webViewHeight = Dimensions.get("window").height - 100;
  const handleShare = () => {
    const { url, title } = articleData;
    const message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: "`Share ${title}`" }
    );
  };
  return (
    <Modal animationType="slide" transparent visible={viewModal}>
      <Container>
        <Header>
          <Left>
            <Button onPress={onClose} transparent>
              <Icon name="close" />
            </Button>
          </Left>
          <Body>
            <Title>{articleData.title}</Title>
          </Body>
          <Right>
            <Button onPress={handleShare} transparent>
              <Icon name="share" />
            </Button>
          </Right>
        </Header>
        <Content>
          <WebView
            containerStyle={{ height: webViewHeight }}
            source={{ uri: articleData.url }}
            style={{ flex: 1 }}
            error={onClose}
            startInLoadingState
            scalesPageToFit
          ></WebView>
        </Content>
      </Container>
    </Modal>
  );
}
export default ModalView;