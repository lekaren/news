import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Title, Body } from 'native-base';
import TabOne from './Tabs/tabOne';
import TabTwo from './Tabs/tabTwo';
import tabThree from './Tabs/tabThree';
export default class TabsExample extends Component {
  render() {
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
            <tabThree />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}