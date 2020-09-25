import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { StyleSheet,TouchableOpacity, Text,Image,TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class PageFooter extends Component {
  icon1=this.props.active1?
        require('../src/img/Icons/ghome.png')
        :require('../src/img/Icons/home.png')
  icon2=this.props.active2?
        require('../src/img/Icons/gfilter.png')
        :require('../src/img/Icons/filter.png')
  icon3=this.props.active3?
        require('../src/img/Icons/gfind-places.png')
        :require('../src/img/Icons/find-places.png')
  icon4=this.props.active4?
        require('../src/img/Icons/grestaurants.png')
        :require('../src/img/Icons/restaurants.png')
  icon5=this.props.active5?
        require('../src/img/Icons/gtodo.png')
        :require('../src/img/Icons/todo.png')      

  render() {
    return (
      
     
        <Footer >
          <FooterTab style={{backgroundColor:'white'}}>
           
            <Button onPress={() => {Actions.HomeScreen();}} vertical>
              <Icon raised component={TouchableOpacity} {...this.props}> 
                <Image source={this.icon1} 
                       style={{width: 25, height: 25,}}/>         
              </Icon>
           
              <Text style={{fontSize: 10}} numberOfLines={1}>Home</Text>
            </Button>


            <Button onPress={() => {Actions.SearchPage();}} vertical >
            <Icon raised component={TouchableOpacity} {...this.props}> 
            <Image source={this.icon2}  
                   style={{width: 25, height: 25}}/> </Icon>              
            <Text style={{fontSize: 10}}  numberOfLines={1}>Search</Text>
            </Button>


            <Button onPress={() => {Actions.FindPlaces();}} vertical >
            <Icon raised component={TouchableOpacity} {...this.props}> 
            <Image source={this.icon3}  
                   style={{width: 25, height: 25}}/> </Icon>
            <Text style={{fontSize: 10}}  numberOfLines={1}>Find Places</Text>
            </Button>


            <Button onPress={() => {Actions.CoffeeShops();}} vertical >
            <Icon raised component={TouchableOpacity} {...this.props}> 
            <Image source={this.icon4} 
                   style={{width: 25, height: 25}}/> </Icon>              
            <Text style={{fontSize: 10}}  numberOfLines={1}>Restaurants</Text>
            </Button>



            <Button onPress={() => {Actions.ThingsToDo();}} vertical >
            <Icon raised component={TouchableOpacity} {...this.props}> 
            <Image source={this.icon5} 
                   style={{width: 25, height: 25}}/> </Icon>             
            <Text style={{fontSize: 10}}  numberOfLines={1}>Things To Do</Text>
            </Button>
          
          </FooterTab>
        </Footer>
      
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});