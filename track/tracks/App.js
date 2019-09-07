import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from '@expo/vector-icons';
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
import { Provider as TrackProvider } from './src/contexts/TrackContext';
import { setNavigator } from './src/services';

const trackFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
});

trackFlow.navigationOptions = {
  title: 'Tracks',
  tabBarIcon: <FontAwesome name="th-list" size={20} />
};

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
      trackFlow,
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
  <AuthProvider>
    <LocationProvider>
      <TrackProvider>
        <App ref={navigator => setNavigator(navigator)} />
      </TrackProvider>
    </LocationProvider>
  </AuthProvider>
);
