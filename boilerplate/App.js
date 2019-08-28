import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen } from './src/screens/HomeScreen';
import { ComponentsScreen } from './src/screens/ComponentsScreen';
import { ListScreen } from './src/screens/ListScreen';
import { ImageScreen } from './src/screens/ImageScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { ColourScreen } from './src/screens/ColourScreen';
import { SquareScreen } from './src/screens/SquareScreen';
import { TextScreen } from './src/screens/TextScreen';
import { PasswordScreen } from './src/screens/PasswordScreen';

import { BoxScreen } from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colours: ColourScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Password: PasswordScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'React Native'
    }
  }
);

export default createAppContainer(navigator);
