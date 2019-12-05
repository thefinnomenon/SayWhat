import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SettingListScreen from '../screens/SettingListScreen';
import GameScreen from '../screens/GameScreen';
import DecksScreen from '../screens/DecksScreen';
import RoundScreen from '../screens/RoundScreen';
import RulesScreen from '../screens/RulesScreen';
import normalize from '../../responsive';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const MainStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    // @ts-ignore: react-navigation has messed up types
    Settings: SettingsScreen,
    // @ts-ignore: react-navigation has messed up types
    SettingList: SettingListScreen,
    // @ts-ignore: react-navigation has messed up types
    Rules: RulesScreen,
    // @ts-ignore: react-navigation has messed up types
    Decks: DecksScreen,
    Game: GameScreen,
    Round: RoundScreen,
  },
  {
    // @ts-ignore: react-navigation has messed up types
    defaultNavigationOptions: ({ navigation, screenProps }) => ({
      headerBackTitle: null,
      headerTintColor: screenProps.theme.nav.tintColor,
      headerStyle: {
        height: normalize(44),
        backgroundColor: screenProps.theme.nav.background,
        borderBottomColor: screenProps.theme.nav.borderColor,
        borderBottomWidth: screenProps.theme.nav.borderWidth,
      },
      headerTitleStyle: {
        color: screenProps.theme.colors.text,
        fontSize: normalize(17),
        fontWeight: screenProps.theme.nav.titleStyle.fontWeight,
      },
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <StyledIcon name="chevron-left" />
        </TouchableOpacity>
      ),
    }),
  },
);

const StyledIcon = styled(Icon)`
  font-size: ${normalize(20)};
  margin-left: ${normalize(20)}px;
  color: ${props => props.theme.nav.tintColor};
`;

export default MainStackNavigator;
