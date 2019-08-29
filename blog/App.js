import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { IndexScreen, ShowScreen, CreateScreen, EditScreen } from './src/screens';
import { Provider as BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog List'
    }
  }
);

const App = createAppContainer(navigator);

export default () => (
  <BlogProvider>
    <App />
  </BlogProvider>
);
