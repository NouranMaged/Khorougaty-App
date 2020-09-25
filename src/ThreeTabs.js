import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import TabAll from './TabAll';
import SearchPage from './SearchPage';
import ThingsToDo from './ThingsToDo';

export default class ThreeTabs extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading style={{backgroundColor:"white"}}>
            <Text style={{color:'black'}}>All</Text></TabHeading>}>
            <TabAll />
          </Tab>

          <Tab heading={ <TabHeading style={{backgroundColor:"white"}}>
            <Text style={{color:'black'}}>Restaurants</Text></TabHeading>}>
            <TabAll />
          </Tab>

          <Tab heading={ <TabHeading style={{backgroundColor:"white"}}>
            <Text style={{color:'black'}}>Coffee Shops</Text></TabHeading>}>
            <TabAll />
          </Tab>

        </Tabs>
      </Container>
    );
  }
}