import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { StyleSheet,TouchableOpacity,Image,TouchableHighlight } from 'react-native';
import TabAll from './TabAll';
import TabAbout from './TabAbout';
import TabMap from './TabMap';
import MainHeader from './MainHeader';
import PageFooter from './PageFooter';



export default class PlaceDetails extends Component {

    state={  
      iconAbout:require('../src/img/Icons/about.png'),
      iconMap:require('../src/img/Icons/grey-map-marker.png')
}


  render() {
    return (
      <Container>
         <MainHeader txt={this.props.title}/>
        <Tabs>
          <Tab onPress={()=>{
             this.setState({ iconAbout:require('../src/img/Icons/gabout.png')})
           }} heading={ <TabHeading style={{backgroundColor:"white"}}>
           <Icon >
            <Image source={this.state.iconAbout} 
                   style={{width: 20, height: 20}}/>
           </Icon>
            <Text style={{color:'black'}}>About</Text></TabHeading>}>

            <TabAbout 
                      image={this.props.image}
                      content={this.props.content}
                      address={this.props.address}
                      phone_number={this.props.phone_number}
                      email_address={this.props.email_address}
                      author_name={this.props.author_name}
                      />
          </Tab>

         

          <Tab  onPress={()=>{
             this.setState({ iconMap:require('../src/img/Icons/map-marker.png')})
           }} heading={ <TabHeading style={{backgroundColor:"white"}}>
            <Icon >
              <Image source={this.state.iconMap} 
                   style={{width: 20, height: 20}}/>
           </Icon>

           <Text style={{color:'black'}}>Map</Text></TabHeading>}>

            <TabMap 
              location={this.props.location}/>
          </Tab>

        </Tabs>
        <PageFooter/> 

      </Container>
    );
  }
}


// import React, { Component } from 'react';
// import { Image } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
// import { Actions } from 'react-native-router-flux';
// import MainHeader from './MainHeader';
// import PageFooter from './PageFooter';
// import TwoTabs from './TwoTabs'



// export default class PlaceDetails extends Component {


//   render() {
//     return (

//       <Container >
        
//           <MainHeader txt={this.props.title}/>
//           {/* <Button  iconLeft transparent light onPress={() => {Actions.CoffeeShops();}}>
//             <Icon name='arrow-back' style={{color:'black'}} />
//           </Button> */}

//           <TwoTabs/>
// {/*           
//         <Content >
//             <Card > 

//               <CardItem style={{height:500}}> 
//                 <Body > 
//                     <Image style={{height: 250, width: "80%" ,margin: 10}}
//                           source={{uri: this.props.image}} />

//                         <Card style={{height:200}}>
//                           <Text note > {this.props.content} </Text>
//                         </Card>
//                 </Body> 
//               </CardItem> 

//             </Card> 

//         </Content> */}
//         <PageFooter/> 

//       </Container>
//     );
//   }
// }