import React, { Component } from 'react'
import { Container, Header, Content, Thumbnail,Left, Body, Right, Button, Spinner,ListItem, List,Card, CardItem} from 'native-base';
import PageFooter from './PageFooter'
import { TouchableOpacity, Text,AsyncStorage,FlatList, ActivityIndicator, View,ScrollView ,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MainHeader from './MainHeader';
import ThreeTabs from './ThreeTabs'

export default class ThingsToDo extends Component {
    
    state = {data: [],loaded: 0 }
  
    componentDidMount(){
      return fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4')
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
                <MainHeader txt="Things To Do"/> 
                
                    <Container>
                    {/* <ThreeTabs/>  */}
                        <ScrollView  >           
                            {/* <Content> */}
                                {this.info()}
                            {/* </Content> */}
                        </ScrollView>
                    </Container>
                
                <PageFooter active5="true"/>

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
            <ListItem thumbnail style={{marginTop:30}} >
              <Left>
                <Image square source={{uri: response.better_featured_image.source_url}}
                       style={{height:140,width:100,borderRadius:10}}  />
              </Left>
              <Body>
                <Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>{response.title.rendered}</Text>
                <Text style={{color:'green'}}>
                   <Image source={require('../src/img/Icons/map-marker.png')} 
                                 style={{width: 15, height: 15,}}/>
                                 {response.acf.address}
                </Text>
                <Text note numberOfLines={4}>{response.content.rendered}</Text>
              

                <Button  success 
                         style={{width:80,borderRadius:10 ,height:35,alignContent:'center'}}
                         onPress={() =>{
                            Actions.PlaceDetails({
                                // "image":response.better_featured_image.source_url,
                                // "title": response.title.rendered,
                                // "content": response.content.rendered,
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

// import React, { Component } from 'react'
// import { Container, Header, Content, Thumbnail,Left, Right,Card,CardItem,Body, Button, Spinner,ListItem, Icon,List} from 'native-base';
// import PageFooter from './PageFooter'
// import { TouchableOpacity, Text,AsyncStorage,FlatList, ActivityIndicator, StyleSheet,View,ScrollView ,Image } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import MainHeader from './MainHeader';
// import AllPlaces from './AllPlaces';
// import AllActivities from './AllActivities';
// import AllRestaurants from './AllRestaurants';


// export default class ThingsToDo extends React.Component {

//   render(){

//         return(

            

//             <Container>
//                 <MainHeader  />
//                     <Content>
//                         <Text>this Find Places page</Text>
//                     </Content>
//                 <PageFooter/>     
//             </Container> 
//                );
//     }
// }






















// import React, { Component } from 'react'
// import { Container, Header, Content, Thumbnail,Left, Body, Right, Button, Spinner,ListItem, List} from 'native-base';
// import PageFooter from './PageFooter'
// import { TouchableOpacity, Text,AsyncStorage,FlatList, ActivityIndicator, View,ScrollView ,Image } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import HomeHeader from './HomeHeader';



// export default class HomeScreen extends React.Component {

//   state = {data: [],loaded: 0 }

//   componentDidMount(){
//     return fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           loaded: 1,
//           data: responseJson,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }



//   render(){

//         return(

//         <Container>
//             <HomeHeader />
//             <ScrollView horizontal={true} >

//                 {/* <Content> */}
//                     {this.info()}
//                 {/* </Content> */}
//                 </ScrollView>

//              <PageFooter/>           
//         </Container>
//         );
//     }



//     info(){
//         if(this.state.loaded ===0){
//             return(
//                 <Spinner/> 
//                 )
//         }else{
//             return(
//                 this.state.data.map((response) => {
//                 return(
                    
//               <List key={response.id}>
//                 {/* <TouchableOpacity onPress={() =>{
//                     Actions.CardComponent({
//                         "image":response.better_featured_image.source_url,
//                         "title": response.title.renderd,
//                         "content": response.content.renderd,
//                     })                   
//                 }}> */}

                   

//                 <ListItem style={{marginTop:10}}>
                
              
                 



//                     <Image style={{width:120 ,height:120, borderRadius:20}}
//                            square
//                            source={{uri: response.better_featured_image.source_url}} />
                                       
               
//                    <Body style={{flex:0}}>
//                    <Text>{response.title.rendered}</Text>
//                    </Body>
//                    {/* <Text note numberOfLines={6}>
//                    {response.content.rendered}
//                    </Text> */}
                  
//                 </ListItem>
//                     {/* </TouchableOpacity> */}

                  
//               </List>
               
//             )
//         })
//             )
//     }
// }


    
// }







//CODE AZAZY
// import React, { Component } from 'react'
// import { Container, Header, Content, List, ListItem, Thumbnail,Text,Left, Body, Right, Button, Spinner, CardItem ,Card} from 'native-base';
// import PageFooter from './PageFooter'
// import { TouchableOpacity, Text,AsyncStorage,AsyncStorage } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import HomeHeader from './HomeHeader';

// type Props = {};
// export default class HomeScreen extends Component<Props> {
//     state = {data: [],loaded: 0 }
//     componentDidMount(){AsyncStorage.setItem('HomeScreen','1')}
    

//     componentDidMount(){
//         fetch("https://facebook.github.io/react-native/movies.json")
//                 .then((r) => 
//                 r.json()
//                 ).then((rJson) => {
//         this.setState({
//             data:rJson,
//             loaded:1
//         },function(){

//         });
//         }).catch((error) => {
//             console.log(error)
//         })
//     }




//     render(){
    
//         return (
        
//             <Container>
//             <HomeHeader />
            
//                     <Content>
//                         {this.info()}
//                     </Content>

//             <PageFooter/> 

//             </Container>

//         );
//     }


//     info(){
//         if(this.state.loaded ===0){
//             return(
//                 <Spinner/> 
//                 )
//         }else{
//             return(
//                 this.state.data.map((x) => {
//                 return(
//                 <Card key={x.id}>
//                 <TouchableOpacity onPress={() =>{
//                     Actions.CardComponent({
//                         "image":x.better_featured_image.source_url,
//                         "title": x.title.renderd,
//                         "content": x.content.renderd,
//                     })                   
//                 }}>
//                 <CardItem thumbnail style={{marginTop:10}}>
//                  <Left style={{flex:2}}>
//                     <Thumbnail style={{width:120 ,height:120, borderRadius:20}}
//                                resizeMode="cover"
//                                square
//                                source={{uri: x.better_featured_image.source_url}} />                    
//                  </Left>

//                  <Body style={{flex:3}}>
//                    <Text>{x.title.renderd}</Text>
//                    <Text note numberOfLines={6}>
//                    {x.content.renderd}
//                    </Text>

//                  </Body>

//                     </CardItem>
//                     </TouchableOpacity>
//                 </Card>
//             )
//         })
//             )
//     }
// }
// }











//CODE LION KING
// import React, { Component } from 'react'
// import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
// import PageFooter from './PageFooter'
// import { TouchableOpacity, Text,AsyncStorage } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import HomeHeader from './HomeHeader';


// export default class HomeScreen extends Component {
    
//     // componentDidMount(){AsyncStorage.setItem('home','1')}


// render(){
  
//  return (
    
//     <Container>
//         <HomeHeader />
//         <Content>
//             <List>
//                 <ListItem thumbnail>

//                 <Left>
//                  <Thumbnail style={{width:120,height:120,borderRadius:20}} square source={{ uri: 'https://prodimage.images-bn.com/pimages/0786936853773_p0_v1_s550x406.jpg' }} />
//                 </Left>
                   
//                     <TouchableOpacity  onPress={() => {
//                                        Actions.news({"pageTitle":"Lion King Movie",
//                                        img:"https://prodimage.images-bn.com/pimages/0786936853773_p0_v1_s550x406.jpg",
//                                        newsData:"ij;fdskf;jdsklfjdsl;fjkl;dsafjldksjf;kdfdkiflds'fk;l df;fjds'fgsdljf"
//                                     });
//                                        }}>
//                         <Body>
//                             <Text>Lion King Movie</Text>
//                             <Text note numberOfLines={1}>Its time to build a difference . .</Text>
//                         </Body>
//                     </TouchableOpacity>
//                 </ListItem>


//             </List>
//         </Content>

//      <PageFooter/> 

//     </Container>

//    )
// }
// }










// import React, { Component } from 'react'
// import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
// import PageFooter from './PageFooter'
// import MainHeader from './MainHeader';
// import { TouchableOpacity, Text,AsyncStorage } from 'react-native';
// import { Actions } from 'react-native-router-flux';


// export default class ThingsToDo extends Component {
    
//     // componentDidMount(){AsyncStorage.setItem('home','1')}


// render(){
  
//  return (
    
//     <Container>
//         <MainHeader />
//         <Content>
//         <Text>this is what to do page </Text>
//         </Content>

//      <PageFooter/> 

//     </Container>

//    )
// }
// }
