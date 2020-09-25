import React, { Component } from 'react'
import { Container, Header, Content, Thumbnail,Left, Right,Card,CardItem,Body, Button, Spinner,ListItem, Icon,List} from 'native-base';
import PageFooter from './PageFooter'
import { TouchableOpacity, Text,AsyncStorage,FlatList, ActivityIndicator, StyleSheet,View,ScrollView ,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HomeHeader from './HomeHeader';
import AllPlaces from './AllPlaces';
import AllActivities from './AllActivities';
import AllRestaurants from './AllRestaurants';


export default class ThingsToDo extends React.Component {
    componentDidMount(){AsyncStorage.setItem('HomeScreen','1')}


  render(){
        return(
        <Container >        
            <HomeHeader/>              
                <Container >
                   <ScrollView >
                      
                            <Card >
                                <CardItem>
                                <Left>                                
                                   <Image source={require('../src/img/Vector-Icons/home-first-icon.png')} 
                                               style={{width: 35, height: 35}}/>                                
                                    <Text style={{fontSize:15 , fontWeight:'bold',color:'black',marginLeft:10}}>Places For Going Out</Text>                                 
                                </Left>                       
                                
                                <Right>
                                    <Button transparent light onPress={() => {Actions.FindPlaces();}} >
                                       <Text style={{color:'green'}}>View More</Text>
                                    </Button>
                                </Right>
                                </CardItem>
                            </Card>
                            
                          <AllPlaces/>
                     

                        
                            <Card >
                                <CardItem  >
                                <Left>
                                
                                    <Image source={require('../src/img/Vector-Icons/home-third-icon.png')} 
                                           style={{width: 35, height: 35,}}/> 
                              

                                <Text  style={{fontSize:15, fontWeight:'bold',color:'black',marginLeft:10}}>Restaurants & Coffee Shops</Text>
                                </Left>
                                
                                <Right>
                                    <Button transparent light onPress={() => {Actions.ThingsToDo();}}>
                                        <Text style={{color:'green'}}>View More</Text>
                                    </Button>
                                </Right>
                                </CardItem>
                            </Card>
                            <AllRestaurants/>
                        
                            <Card >
                                <CardItem  >
                                
                                    <Image source={require('../src/img/Vector-Icons/home-second-icon.png')} 
                                           style={{width: 35, height: 35,}}/> 
                              

                                <Text  style={{fontSize:15 , fontWeight:'bold',color:'black',marginLeft:10}}>What Do I Do?</Text>
                                <Right>
                                    <Button transparent light onPress={() => {Actions.CoffeeShops();}}>
                                        <Text style={{color:'green'}}>View More</Text>
                                    </Button>
                                </Right>
                                </CardItem>
                            </Card>
                            <AllActivities/>

                    </ScrollView>
                </Container>            

             <PageFooter active1="true"/>           
        </Container>
        );
    }
}