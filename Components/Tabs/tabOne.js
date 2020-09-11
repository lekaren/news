import React, { useState, useEffect } from "react";
import ModalView from "../ModalView";
import { getArticles } from "../../api/news";
import DataItem from "../DataItem";
import { Container, Content, List } from "native-base";
import { Text, View, ActivityIndicator } from "react-native";

export default function tabOne() {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [viewModal, setViewModal] = useState(false);
  const [modalArticleData, setModalArticleData] = useState({});
  // 모달열기
  const handleModalOpen = (articleData) => {
    setViewModal(true);
    setModalArticleData(articleData);
  };
  // 모달닫기
  const handleModalClose = () => {
    setViewModal(false);
    setModalArticleData({});
  };
  useEffect(() => {
    async function get_articles() {
      setArticles(await getArticles());
      setIsLoading(false);
    }
    get_articles();
  }, []);
  const pageView = isLoading ? (
    <View>
      <ActivityIndicator animating={isLoading} size="large" />
      <Text style={{ marginTop: 10 }}>로딩중...</Text>
    </View>
  ) : (
    <List
      dataArray={articles}
      renderRow={(article) => {
        return <DataItem article={article} handleModalOpen={handleModalOpen} />;
      }}
    />
  );
  return (
    <Container>
      <Content>{pageView}</Content>
      <ModalView
        viewModal={viewModal}
        articleData={modalArticleData}
        onClose={handleModalClose}
      />
    </Container>
  );
}
