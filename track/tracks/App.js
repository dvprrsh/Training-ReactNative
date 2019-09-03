import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {
  AccountScreen,
  SignInScreen,
  SignUpScreen,
  TrackCreateScreen,
  TrackDetailScreen,
  TrackListScreen
} from './src/screens';

const switchNavigator = createSwitchNavigator(
  {
    logInFlow: createStackNavigator(
      {
        SignIn: SignInScreen,
        SignUp: SignUpScreen
      },
      {
        initialRouteName: 'SignUp'
      }
    ),
    mainFlow: createBottomTabNavigator({
      trackFlow: createStackNavigator({
        TrackList: TrackListScreen,
        TrackDetail: TrackDetailScreen
      }),
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen
    })
  },
  {
    initialRouteName: 'logInFlow',
    defaultNavigationOptions: {
      title: 'Blog List'
    }
  }
);

export default createAppContainer(switchNavigator);
