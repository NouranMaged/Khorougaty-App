import React, { Component } from 'react'
import { Container, Header, Content, Thumbnail,Left, Body, Right, Button, Spinner,ListItem, List} from 'native-base';
import PageFooter from './PageFooter'
import { TouchableOpacity, Text,AsyncStorage,FlatList, ActivityIndicator, View,ScrollView ,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HomeHeader from './HomeHeader';


export default class AllRestaurants extends React.Component {

    state = {data: [],loaded: 0 }
  
    componentDidMount(){
      return fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3')

        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            loaded: 1,
            data: responseJson,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
    }
  
  
  
    render(){
  
          return(
  
          <Container style={{height:300}} >
              <ScrollView horizontal={true} >
  
                  {/* <Content> */}
                      {this.info()}
                  {/* </Content> */}
                  </ScrollView>
            </Container>
          );
      }
  
  
  
      info(){
        if(this.state.loaded ===0){
            return(
                <Spinner/> 
                )
        }else{
          
              return(
                  this.state.data.map((response) => {
                  return(
                      
                <List key={response.id}>
                
                  <ListItem style={{marginTop:10,width:120,marginRight:30}}>

                  <TouchableOpacity onPress={() =>{
                      Actions.PlaceDetails({
                          "image":response.better_featured_image.source_url,
                          "title": response.title.rendered,
                          "content": response.content.rendered,
                          "address" :response.acf.address,
                          "phone_number" :response.acf.phone_number,
                          "email_address" :response.acf.email_address,
                          "location" :response.acf.map_location

                      })                   
                  }}>
    
                      <Image style={{width:120 ,height:120, borderRadius:20}}
                             square
                             source={{uri: response.better_featured_image.source_url}} />
                                         
                 
                     <Body  style={{flex:0,alignSelf:'center',marginRight:20}}>
                        <Text style={{fontWeight:'bold'}}>{response.title.rendered}</Text>
                        <Text style={{color:'green'}}>
                          <Image source={require('../src/img/Icons/map-marker.png')} 
                                style={{width: 15, height: 15,}}/>{response.acf.address}
                        </Text>
                     </Body>
                     
                     </TouchableOpacity>
                  </ListItem>
                      
  
                    
                </List>
                 
              )
          })
              )
        }
      }
    
  }