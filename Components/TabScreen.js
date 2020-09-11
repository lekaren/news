import React from 'react';
import { Container, Header, Tab, Tabs, Title, Body } from 'native-base';
import TabOne from './Tabs/tabOne';
import TabTwo from './Tabs/tabTwo';
import TabThree from './Tabs/tabThree';
import TabFour from './Tabs/tabFour';

function TabsExample (){
  return (
    <Container>
      <Header hasTabs>
        <Body>
          <Title>News App</Title>
        </Body>
      </Header>
      <Tabs>
        <Tab heading="일반">
          <TabOne />
        </Tab>
        <Tab heading="스포츠">
          <TabTwo />
        </Tab>
        <Tab heading="건강">
          <TabThree />
        </Tab>
        <Tab heading="과학">
          <TabFour />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default TabsExample