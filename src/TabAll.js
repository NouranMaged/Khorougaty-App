import React, { Component } from 'react'
import { Container, Header, Content, Thumbnail,Left, Body, Right, Button, Spinner,ListItem, List,Card, CardItem} from 'native-base';
import PageFooter from './PageFooter'
import { TouchableOpacity, Text,AsyncStorage,FlatList, ActivityIndicator, View,ScrollView ,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MainHeader from './MainHeader';
import ThreeTabs from './ThreeTabs'

export default class TabAll extends Component {
    
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
    
        return (

            <Container>            
              <ScrollView  >                                   
                 {this.info()}                       
              </ScrollView>
            </Container>
        )
    }

    info(){
        
            return(
                this.state.data.map((response) => {
                return(

        <View key={response.id}>
        <Content>
          <List >
            <ListItem thumbnail style={{marginTop:30}}>
              <Left>
                <Image square source={{uri: response.better_featured_image.source_url}} 
                       style={{height:140,width:100,borderRadius:10}} />
              </Left>
              <Body>
                <Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>{response.title.rendered}</Text>
                <Text style={{color:'green'}}>
                   <Image source={require('../src/img/Icons/map-marker.png')} 
                                 style={{width: 15, height: 15,}}/>
                                 {response.acf.address}</Text>
                <Text note numberOfLines={4}>{response.content.rendered}</Text>

                <Button success 
                        style={{width:80,borderRadius:10 ,height:35,alignContent:'center'}}
                        onPress={() =>{
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

                  <Text style={{color:'white', fontWeight:'normal',fontSize:15,marginLeft:15}}>Details</Text>
                </Button>

              </Body>

            </ListItem>
          </List>
        </Content>
        </View>
               
            )
        })
            )
}
}
