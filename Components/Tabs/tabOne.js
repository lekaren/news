import React, { useState, useEffect } from 'react';
import { Container, Content, List } from 'native-base';
import { View, ActivityIndicator, Text } from 'react-native';
import { getArticles } from '../../api/news';
import DataItem from '../DataItem';

function TabOne () {

	// 로딩여부 와 뉴스 정보를 state 에 담는다.
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const pageView = isLoading ? (
    <View>
      <ActivityIndicator animating={isLoading} size="large" />
      <Text style={{ marginTop: 10 }}>로딩중...</Text>
    </View>
  ) : (
    <List
      dataArray={articles}
      renderRow={(article) => {
        return <DataItem article={article} />
      }}
    />
  );
  // useEffect 를 통해 초기 랜더링 될때만 데이터를 호출한다.
  useEffect(() => {
    async function get_articles () {
      setArticles(await getArticles());
      setIsLoading(false);
    }
    
    get_articles();
  }, []);
  
  return ( 
    <Container>
        <Content>
          {pageView}
        </Content>
      </Container>
  );
};

export default TabOne;