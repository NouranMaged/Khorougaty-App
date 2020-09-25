import React, { Component } from 'react'
import { Container, Header, Content, Thumbnail,Left, Body, Right, Button, Spinner,ListItem, List,Card, CardItem} from 'native-base';
import PageFooter from './PageFooter'
import { TouchableOpacity, Text,AsyncStorage,FlatList, ActivityIndicator, View,ScrollView ,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MainHeader from './MainHeader';
import ThreeTabs from './ThreeTabs'

export default class CoffeeShops extends Component {
    
    // state = {data: [],loaded: 0 }
  
    // componentDidMount(){
    //   return fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
  
    //       this.setState({
    //         loaded: 1,
    //         data: responseJson,
    //       }, function(){
  
    //       });
  
    //     })
    //     .catch((error) =>{
    //       console.error(error);
    //     });
    // }
  

    render(){
    
        return (

            <Container>
                <MainHeader txt="Rest/Coffees"/>
                
                    {/* <Container> */}
                    <ThreeTabs/>
                        {/* <ScrollView  >           
                                {this.info()}
                        </ScrollView> */}
                    {/* </Container> */}
                
                <PageFooter active4="true"/>

            </Container>

        )
    }
  }

//     info(){
        
//             return(
//                 this.state.data.map((response) => {
//                 return(

//         <View key={response.id}>
//         <Content>
//           <List >
//             <ListItem thumbnail >
//               <Left>
//                 <Thumbnail square source={{uri: response.better_featured_image.source_url}}  />
//               </Left>
//               <Body>
//                 <Text>{response.title.rendered}</Text>
//                 <Text note numberOfLines={1}>{response.content.rendered}</Text>
//               </Body>


//                 <Button  
//                 success onPress={() =>{
//                     Actions.PlaceDetails({
//                         "image":response.better_featured_image.source_url,
//                         "title": response.title.renderd,
//                         "content": response.content.renderd,
//                     })                   
//                 }}>
//                   <Text>Details</Text>
//                 </Button>



//             </ListItem>
//           </List>
//         </Content>
//         </View>
               
//             )
//         })
//             )
// }
// }



// import React, { Component } from 'react'
// import { Container, Header, Content, Thumbnail,Left, Body, Right, Button, Spinner,ListItem, List,Card, CardItem} from 'native-base';
// import PageFooter from './PageFooter'
// import { TouchableOpacity, Text,AsyncStorage,FlatList, ActivityIndicator, View,ScrollView ,Image } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import MainHeader from './MainHeader';
// import ThreeTabs from './ThreeTabs'

// export default class CoffeeShops extends Component {
    
//     state = {data: [],loaded: 0 }
  
//     componentDidMount(){
//       return fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3')
//         .then((response) => response.json())
//         .then((responseJson) => {
  
//           this.setState({
//             loaded: 1,
//             data: responseJson,
//           }, function(){
  
//           });
  
//         })
//         .catch((error) =>{
//           console.error(error);
//         });
//     }
  

//     render(){
    
//         return (

//             <Container>
//                 <MainHeader txt="Rest/Coffees"/>
                
//                     <Container>
//                     <ThreeTabs/>
//                         <ScrollView  >           
//                             {/* <Content> */}
//                                 {this.info()}
//                             {/* </Content> */}
//                         </ScrollView>
//                     </Container>
                
//                 <PageFooter/>

//             </Container>

//         )
//     }

//     info(){
        
//             return(
//                 this.state.data.map((response) => {
//                 return(

//         <View key={response.id}>
//         <Content>
//           <List >
//             <ListItem thumbnail >
//               <Left>
//                 <Thumbnail square source={{uri: response.better_featured_image.source_url}}  />
//               </Left>
//               <Body>
//                 <Text>{response.title.rendered}</Text>
//                 <Text note numberOfLines={1}>{response.content.rendered}</Text>
//               </Body>


//               {/* <Right> */}
//                 <Button  
//                 success onPress={() =>{
//                     Actions.PlaceDetails({
//                         "image":response.better_featured_image.source_url,
//                         "title": response.title.renderd,
//                         "content": response.content.renderd,
//                     })                   
//                 }}>
//                   <Text>Details</Text>
//                 </Button>
//               {/* </Right> */}



//             </ListItem>
//           </List>
//         </Content>
//         </View>

                    
//             //   <Card key={response.id}>
//             //     {/* <TouchableOpacity onPress={() =>{
//             //         Actions.CardComponent({
//             //             "image":response.better_featured_image.source_url,
//             //             "title": response.title.renderd,
//             //             "content": response.content.renderd,
//             //         })                   
//             //     }}> */}

                   

//             //     <CardItem style={{marginTop:10}}>
  
//             //         <Image style={{width:120 ,height:120, borderRadius:20}}
//             //                square
//             //                source={{uri: response.better_featured_image.source_url}} />
                                       
               
//             //        <Body style={{flex:0}}>
//             //           <Text style={{fontStyle:'italic'}}>{response.title.rendered}</Text>
//             //        </Body>

//             //         <Body>
//             //           <Text numberOfLines={3}> {response.content.rendered} </Text>
//             //         </Body>

//             //        <Button success >

//             //          <Text> Details </Text>
//             //        </Button>

//             //     </CardItem>
//             //         {/* </TouchableOpacity> */}

                  
//             //   </Card>
               
//             )
//         })
//             )
// }
// }
