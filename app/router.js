import React, { Component } from 'react';
import {Dimensions, Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Header from './components/header'

import Welcome from './screens/welcome.js';
import Event from './screens/events.js';
import Ecomm from './screens/ecomm.js';
import Screen from './screens/screens.js';

let screen = Dimensions.get('window');

const HomeStack = createStackNavigator({
  'Home': {
    screen: Welcome,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => < Header navigation={navigation}/>,
      }
    }
  }},
  {defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80},
  }
});

const EventStack = createStackNavigator({
  'Events': {
    screen: Event,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => < Header navigation={navigation}/>,
      }
    }
  }},
  {defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80},
  }
});

const eCommStack = createStackNavigator({
  'eCommerce': {
    screen: Ecomm,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => < Header navigation={navigation}/>,
      }
    }
  }},
  {defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80},
  }
});

const ScreenStack = createStackNavigator({
  'Screens': {
    screen: Screen,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => < Header navigation={navigation}/>,
      }
    }
  }},
  {defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80},
  }
});

const drawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Events: {
    screen: EventStack,
  },
  eCommerce: {
    screen: eCommStack,
  },
  Screens: {
    screen: ScreenStack,
  },
});

export default createAppContainer(drawerNavigator);
