import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import {
  AccountScreen,
  LoadingScreen,
  SignInScreen,
  SignUpScreen,
  TrackDetailScreen,
  TrackListScreen
} from './src/screens';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import { Provider as AuthProvider } from './src/contexts/AuthContext';
import { Provider as LocationProvider } from './src/contexts/LocationContext';

import { setNavigator } from './src/services';

const switchNavigator = createSwitchNavigator(
  {
    Loading: LoadingScreen,
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
    initialRouteName: 'Loading',
    defaultNavigationOptions: {
      title: 'Blog List'
    }
  }
);

const App = createAppContainer(switchNavigator);

export default () => (
  <LocationProvider>
    <AuthProvider>
      <App ref={navigator => setNavigator(navigator)} />
    </AuthProvider>
  </LocationProvider>
);
