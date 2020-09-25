import React, { Component } from 'react';
import { Image,ScrollView,TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Item,Input, Text,Spinner,List,ListItem, Button, Icon, Left, Body, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import MainHeader from './MainHeader';
import PageFooter from './PageFooter';
import FetchComment from './FetchComment'


export default class TabAbout extends Component {
  state = {data: [],loaded: 0 , value:'' }
  
    componentDidMount(){
      return fetch(`http://reactnative.website/iti/wp-json/wp/v2/comments?post=7`)
        .then((res) => res.json())
        .then((resJson) => {
  
          this.setState({
            loaded: 1,
            data: resJson,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error,'error is found');
          this.setState({loaded:2})
        });
    }
    constructor(props){
      super()
      this.handelChangeText=this.handelChangeText.bind(this);
    
    }

    handelChangeText(newText){
      this.setState({value:newText})
    }

    postComment = () => {
      fetch(`http://reactnative.website/iti/wp-json/wp/v2/comments?author_name=NNN&author_email=hosam@roqay.com.kw&content=${this.state.value}&post=7`,
     {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        }).then(res => {
          fetch(`http://reactnative.website/iti/wp-json/wp/v2/comments?post=7`)
          .then((res) =>
          res.json()
          ).then((resJson) =>{
            this.setState({
              data:resJson,
              loaded:1,
              value:''
            },function(){

            })
          }).catch((error) => {
            console.log(error,'error is found');
            this.setState({loaded:2})
          })
        }).then(this.setState({
          value:''
        }))

    }


  render() {
    return (

      <Container >
        
      <ScrollView>
          <Card > 

            <CardItem style={{alignItems:'center'}}> 
            
              <Body > 
                  <Image style={{height: 240, width: "101%" ,margin: 10,alignSelf:'center'}}
                        source={{uri: this.props.image}} />

                      <Card style={{borderColor:'black',width:'100%',alignSelf:'center'}}>
                        <Text style={{margin:20,color:'black',fontWeight:'500',alignSelf:'center'}} note > {this.props.content} </Text>
                      </Card>
                    
              </Body>
              
            </CardItem> 


            <CardItem style={{height:200}}> 
              <Body > 
                 <Text note  style={{fontWeight:'bold',fontSize:15,color:'black'}}> More Information: </Text>
                      <Card style={{height:140,width:'95%',alignSelf:'center'}}>

                        <Text note style={{margin:5,height:30,color:'black',marginLeft:10}}>
                          <Image source={require('../src/img/Icons/address.png')} 
                                 style={{width: 20, height: 20,}}/>
                                {this.props.address}  
                        </Text>

                        <Text note style={{margin:5,height:30,color:'black',marginLeft:10}}> 
                          <Image source={require('../src/img/Icons/call.png')} 
                                 style={{width: 20,marginRight:'20', height: 20,}}/>
                                {this.props.phone_number} 
                        </Text>

                        <Text note style={{margin:5,height:30,color:'black',marginLeft:10}}>
                          <Image source={require('../src/img/Icons/mail.png')} 
                                 style={{width: 20, height: 20,}}/>
                                {this.props.email_address} </Text>
                      </Card>                     
              </Body>             
            </CardItem> 

            <CardItem >
            
                      <Body>
                        
                        <Text note  style={{fontWeight:'bold',fontSize:15,color:'black'}} > Leave a Comment: </Text>
      
                        <Item>
                            <Input placeholder="write here...."
                                  onChangeText={this.handelChangeText}
                              />

                              <Button  transparent onPress={this.postComment}>
                                <Icon raised component={TouchableOpacity} {...this.props}> 
                                  <Image source={require('../src/img/Icons/telegram.png')}
                                        style={{width: 25, height: 25}}/>         
                                </Icon>                          
                              </Button>  

                        </Item>                   
                        {this.getComment()}                  
                         
                      </Body>
            </CardItem>

          </Card> 

      </ScrollView>
    </Container>
    );
  }
  
  getComment (){
    if(this.state.loaded ===0) {
      return(
        <Spinner/>
      )
    }else{
          return(
              this.state.data.map((res) => {
              return(                   
                <Card key={res.id}
                      style={{width:'100%'}}>
                      <CardItem>
                          <Left>   
                            <Image style={{height:35,width:35,marginRight:5}}
                                    source={require('../src/img/Icons/profile.png')}/>
                                      <Text > {res.author_name} </Text> 
                          </Left>                      
                            

                          <Right>
                          <Text style={{fontSize:10}}>{res.date}</Text>  
                          </Right>
                      </CardItem>


                      <CardItem>
                      <Text >{res.content.rendered}</Text>  
                      </CardItem>        
                </Card>               
          )
      })
     )
    } 
  }
}