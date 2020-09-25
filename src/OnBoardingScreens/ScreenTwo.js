import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,List ,Thumbnail, Left, Right} from 'native-base';
import {ActivityIndicator,AppRegistry,StyleSheet,View,AsyncStorage,Image,ImageBackground} from 'react-native'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ScreenTwo extends Component {

    render(){

return (
    <Container >

       <ImageBackground source={require('../img/Backgrounds/onboarding-bg-right.png')} 
                        style={{width: '100%', height: '100%',justifyContent:'center',alignItems:'center'}}>

        <Image source={require('../img/Logo/khrogaty-logo.png')} 
               style={{width: 150, height: 150,marginTop:200}}/>
                        
            
            <List style={{alignItems:'center',marginTop:80,width:'90%'}}>
                <Image source={require('../img/Vector-Icons/home-second-icon.png')} 
                       style={{width: 45, height: 45}}/> 
                                            
                 <Text style={{fontSize:15 , fontWeight:'bold',color:'black',alignSelf:'center'}}>Restaurants & Coffee Shops</Text>
                 <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </Text>
            </List>

            <List style={{flexDirection:'row'}}>
                <Left>
                    <Button iconRight  transparent 
                            onPress={() => {Actions.ScreenOne();}}>
                        <Icon name='arrow-back' /> 
                        <Text style={{}}>Prev</Text>                  
                    </Button>
                </Left>
                
                <Right>
                    <Button iconLeft transparent 
                            onPress={() => {Actions.ScreenThree();}}>
                        <Text style={{}}>Next</Text>
                        <Icon name='arrow-forward' /> 
                    </Button>
                </Right>        
            </List>
     </ImageBackground> 

    </Container>
    )}
}

