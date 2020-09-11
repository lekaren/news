import React from 'react';
import { Container, Header, Tab, Tabs, Title, Body } from 'native-base';
import TabOne from './Tabs/tabOne';
import TabTwo from './Tabs/tabTwo';
import TabThree from './Tabs/tabThree';

function TabsExample (){
  return (
    <Container>
      <Header hasTabs>
        <Body>
          <Title>News App</Title>
        </Body>
      </Header>
      <Tabs>
        <Tab heading="Tab1">
          <TabOne />
        </Tab>
        <Tab heading="Tab2">
          <TabTwo />
        </Tab>
        <Tab heading="Tab3">
          <TabThree />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default TabsExample