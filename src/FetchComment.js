// import React from 'react';
// import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

// export default class FetchCommnet extends React.Component {

//    state = {data: [],loaded: 0 }
  
//     componentDidMount(){
//         return fetch('http://reactnative.website/iti/wp-json/wp/v2/comments?post=7')
//           .then((res) => res.json())
//           .then((resJson) => {
    
//             this.setState({
//               loaded: 1,
//               data: resJson,
//             }, function(){
    
//             });
    
//           })
//           .catch((error) =>{
//             console.error(error);
//           });
//       }
  
//  render(){
//     return(
  
//         <Container style={{height:200}}> 
//             <ScrollView horizontal={true} >

//                     {this.info()}
              
//                 </ScrollView>
//           </Container>
//         );
//     }

// info(){
//     if(this.state.loaded ===0){
//         return(
//             <Spinner/>)
//          }else{
      
//           return(
//               this.state.data.map((res) => {
//               return(
                  
//             <List key={res.id}>
             
//             <ListItem style={{marginTop:10}}>
//               <TouchableOpacity onPress={() =>{
//                                 Actions.PlaceDetails({
//                                     "author_name": res.author_name,
//                                     "content": res.content.rendered,
//                                     "date" :res.date,                                   
//                                 })                   
//                                 }}>

             
//                  <Body style={{flex:0,alignSelf:'center',}}>
//                     <Text style={{fontWeight:'bold'}}>{res.author_name}</Text>
//                     <Text style={{fontWeight:'bold'}}>{res.date}</Text>
//                     <Text style={{fontWeight:'bold'}}>{res.content.rendered}</Text>

//                  </Body>
                
//               </TouchableOpacity>

//             </ListItem>

                
//             </List>
             
//           )
//       })
//           )
//     }
//   }
  
// }
