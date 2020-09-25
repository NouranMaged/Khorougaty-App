import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';
import MainHeader from './MainHeader';
import PageFooter from './PageFooter';
// import TwoTabs from './TwoTabs';
import {WebView} from 'react-native';



export default class TabMap extends Component {


  render() {
    return (

      <Container >
        
        <WebView
            source={{uri: this.props.location}}
            style={{marginTop: 10}}
            />

      </Container>
    );
  }
}