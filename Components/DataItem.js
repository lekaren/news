import React from 'react';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import moment from 'moment';

function DataItem ({ article }) {  
  return (
    <ListItem thumbnail>
      <Left>
				{/* 뉴스 기사중 이미지가 없는것도 있기 때문에 이미지가 없는경우 없는 이미지를 보여주는 처리를 넣어준다. */}
        <Thumbnail square source={{ uri: article.urlToImage || 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png' }} />
      </Left>
      <Body>
  <Text numberOfLines={2}>{article.title}</Text>
  <Text note numberOfLines={2}>{article.description}</Text>
  <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
		{/* 출처 */}
    <Text note>{article.source.name}</Text>
		{/* 언제 기재된 뉴스인지 표기 ( 시간이 없을수도 있으므로 시간이 없는경우 처리도 넣어주어야 한다 ) */}
    <Text note>{moment(article.publishedAt || moment.now).fromNow()}</Text>
  </View>
</Body>
      <Right>
        <Button transparent>
          <Text>보기</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default DataItem;