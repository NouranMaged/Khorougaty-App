import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon ,Thumbnail, List} from 'native-base';
import {ActivityIndicator,AppRegistry,StyleSheet,View,AsyncStorage,Image,ImageBackground} from 'react-native'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ScreenOne extends Component {

    render(){

return (
    <Container >

      <ImageBackground source={require('../img/Backgrounds/onboarding-bg-left.png')} 
                       style={{width: '100%', height: '100%',justifyContent:'center',alignItems:'center'}}>

        <Image source={require('../img/Logo/khrogaty-logo.png')} 
                 style={{width: 150, height: 150,marginTop:200}}/>
                        
            
            <List style={{alignItems:'center',marginTop:100,width:'90%'}}>
                <Image source={require('../img/Vector-Icons/home-first-icon.png')} 
                       style={{width: 45, height: 45}}/> 
                                            
                 <Text style={{fontSize:15 , fontWeight:'bold',color:'black',alignSelf:'center'}}>Places For Going Out</Text>
                 <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </Text>

                 <Button iconLeft transparent style={{paddingTop:60,paddingLeft:270}}
                        onPress={() => {Actions.ScreenTwo();}}>
                    <Text style={{}}>Next</Text>
                    <Icon name='arrow-forward' /> 
                 </Button>
            </List>
     </ImageBackground> 

    </Container>
    )}
}

