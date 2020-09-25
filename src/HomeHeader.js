import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { StyleSheet,TouchableOpacity, Text,Image ,View,ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class HomeHeader extends Component {
  render() {
    return (

<View style={{flex:0.4}}>
        <Header>
          
            <ImageBackground source={require('../src/img/Backgrounds/home-header.png')} 
                             style={{width: '120%', height: 150,justifyContent:'center',position:'absolute',alignItems:'center'}}>
            
                <Image source={require('../src/img/Logo/khrogaty-logo.png')} 
                       style={{width: 100, height: 100,}}>
                </Image>
            </ImageBackground>
          
        </Header>
</View>
    );
  }
}