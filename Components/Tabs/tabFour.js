import React, { useState, useEffect } from "react";
import ModalView from "../ModalView";
import DataItem from "../DataItem";
import { Container, Content, List } from "native-base";
import { Text, View, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function tabOne() {
  const [viewModal, setViewModal] = useState(false);
  const [modalArticleData, setModalArticleData] = useState({});

  const dispatch = useDispatch();
  const { isLoading, articles } = useSelector((state) => {
    return {
      isLoading: state.isLoading,
      articles: state.science,
    };
  });
  useEffect(() => {
    dispatch({ type: "CLICK", category: "science" });
  }, []);

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
