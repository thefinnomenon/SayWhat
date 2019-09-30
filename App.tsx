import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import DecksScreen from './src/screens/DecksScreen';
import RoundScreen from './src/screens/RoundScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Decks: DecksScreen,
  Game: GameScreen,
  Round: RoundScreen,
});

export default createAppContainer(AppNavigator);
