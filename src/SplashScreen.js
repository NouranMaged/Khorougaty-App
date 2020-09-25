import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon ,Thumbnail} from 'native-base';
import {ActivityIndicator,AppRegistry,StyleSheet,View,AsyncStorage,Image,ImageBackground} from 'react-native'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class SplashScreen extends Component {
  componentDidMount(){
    setTimeout(function(){

    
    AsyncStorage.getItem('HomeScreen').then((value) =>{
      if(value === '1'){  
         Actions.pop(), Actions.HomeScreen()
        }
      else {
         Actions.pop(),Actions.ScreenOne()
       
      }
    })
  },1000);
  
}

    render(){

return (
    <Container >

      <ImageBackground source={require('../src/img/Backgrounds/splash-bg.png')} 
                       style={{width: '100%', height: '100%',justifyContent:'center',alignItems:'center'}}>

          <Image source={require('../src/img/Logo/khrogaty-logo.png')} 
                 style={{width: 150, height: 150}}/>
                
      </ImageBackground>
    </Container>
    )}
}

