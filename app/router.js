import React, { Component } from 'react';
import {Dimensions, Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import Welcome from './screens/welcome.js';
import Event from './screens/events.js';
import Ecomm from './screens/ecomm.js';
import Screen from './screens/screens.js';
import Settings from './screens/settings.js';

//let screen = Dimensions.get('window');

const routes = {
  'Home': {
    screen: Welcome,
    navigationOptions: {
      title: 'Home',
      //drawerLabel: 'Home'
    },
  },

  'Events': {
    screen: Event,
    navigationOptions: {
      title: "Events",
      //drawerLabel: "Events"
    },
  },

  'eCommerce': {
    screen: Ecomm,
    navigationOptions: {
      title: "eCommerce",
      //drawerLabel: "eCommerce"
    },
  },

  'Screens': {
    screen: Screen,
    navigationOptions: {
      title: "Screens",
      //drawerLabel: "Screens"
    },
  },

};

const topmenu = {
  'Settings': {
    screen: Settings,
    navigationOptions: {
      title: "Settings",
      //drawerLabel: "Screens"
    },
  },
}

const RootDrawerNavigator = createDrawerNavigator(routes);

const HeaderNavigator = createStackNavigator(topmenu);

export default createAppContainer(RootDrawerNavigator);
