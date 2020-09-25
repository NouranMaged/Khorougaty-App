import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet,TouchableOpacity, Text,Image ,View,ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class MainHeader extends Component {
  render() {
    return (

<View style={{flex:0.2}}>
        <Header>
          
            <ImageBackground source={require('../src/img/Backgrounds/theme-header.png')} 
                             style={{width: '120%', height: 100,justifyContent:'center',position:'absolute',alignItems:'center'}}>
           
            </ImageBackground>

            <Body>
            <Title style={{marginLeft:30,marginTop:35,fontWeight:'bold',fontSize:25}}>{this.props.txt}</Title>
          </Body>
          
        </Header>
</View>
    );
  }
}