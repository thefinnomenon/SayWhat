import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GameScreen from '../screens/GameScreen';
import DecksScreen from '../screens/DecksScreen';
import RoundScreen from '../screens/RoundScreen';

export const MainStackNavigator = createStackNavigator({
  Home: HomeScreen,
  // @ts-ignore: react-navigation has messed up types
  Settings: SettingsScreen,
  Decks: DecksScreen,
  Game: GameScreen,
  Round: RoundScreen,
});

export default MainStackNavigator;
