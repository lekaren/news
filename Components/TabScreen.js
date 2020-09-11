import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree.js';

  function TabScreen() {
    return (
      <Container>
        <Header hasTabs>
            <Body>
                <Title>News</Title>
            </Body>
        </Header>
        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }

export default TabScreen;