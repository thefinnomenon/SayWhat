import { ScreenProps } from '../../types';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SettingListScreen from '../screens/SettingListScreen';
import GameScreen from '../screens/GameScreen';
import DecksScreen from '../screens/DecksScreen';
import RoundScreen from '../screens/RoundScreen';

export const MainStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    // @ts-ignore: react-navigation has messed up types
    Settings: SettingsScreen,
    // @ts-ignore: react-navigation has messed up types
    SettingList: SettingListScreen,
    Decks: DecksScreen,
    Game: GameScreen,
    Round: RoundScreen,
  },
  {
    defaultNavigationOptions: ({
      screenProps,
    }: {
      screenProps: ScreenProps;
    }) => ({
      headerTintColor: screenProps.theme.nav.tintColor,
      headerStyle: {
        backgroundColor: screenProps.theme.nav.background,
        borderBottomColor: screenProps.theme.nav.borderColor,
        borderBottomWidth: screenProps.theme.nav.borderWidth,
      },
      headerTitleStyle: {
        color: screenProps.theme.colors.text,
        fontSize: screenProps.theme.nav.titleStyle.fontSize,
        fontWeight: screenProps.theme.nav.titleStyle.fontWeight,
      },
    }),
  },
);

export default MainStackNavigator;
