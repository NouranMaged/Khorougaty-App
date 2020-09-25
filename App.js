import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import HomeScreen from './src/HomeScreen'
import SearchPage from './src/SearchPage'
import SplashScreen from './src/SplashScreen'
import ThingsToDo from './src/ThingsToDo'
import FindPlaces from './src/FindPlaces'
import CoffeeShops from './src/CoffeeShops'
import PlaceDetails from './src/PlaceDetails'
import TabAll from './src/TabAll'
import TabAbout from './src/TabAbout'
import ScreenOne from './src/OnBoardingScreens/ScreenOne'
import ScreenTwo from './src/OnBoardingScreens/ScreenTwo'
import ScreenThree from './src/OnBoardingScreens/ScreenThree'

import { Container } from 'native-base';

export default class App  extends Component<Props> {
  render(){
    return(
      <Container>
      <Router >
        <Scene key = "root">
          <Scene key = "SplashScreen" component = {SplashScreen} title = "SplashScreen" hideNavBar={true} initial = {true} />

          <Scene key = "HomeScreen" component = {HomeScreen} title = "HomeScreen" hideNavBar={true} type='reset' />
          <Scene key = "SearchPage" component = {SearchPage} title = "SearchPage" hideNavBar={true} />
          <Scene key = "ThingsToDo" component = {ThingsToDo} title = "ThingsToDo" hideNavBar={true} />
          <Scene key = "FindPlaces" component = {FindPlaces} title = "FindPlaces" hideNavBar={true}/>
          <Scene key = "CoffeeShops" component = {CoffeeShops} title = "CoffeeShops" hideNavBar={true} />
          <Scene key = "PlaceDetails" component = {PlaceDetails} title = "PlaceDetails" hideNavBar={true}/>
          <Scene key = "TabAll" component = {TabAll} title = "TabAll" hideNavBar={true}/>
          <Scene key = "TabAbout" component = {TabAbout} title = "TabAbout" hideNavBar={true}/>
          <Scene key = "ScreenOne" component = {ScreenOne} title = "ScreenOne" hideNavBar={true} type='reset'/>
          <Scene key = "ScreenTwo" component = {ScreenTwo} title = "ScreenTwo" hideNavBar={true}/>
          <Scene key = "ScreenThree" component = {ScreenThree} title = "ScreenThree" hideNavBar={true}/>



        </Scene>
      </Router>


    
       {/* <PageFooter/> */}
    </Container>

    )
 
  }
 
}
