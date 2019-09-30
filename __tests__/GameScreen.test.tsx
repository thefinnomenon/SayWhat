import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import GameScreen from '../src/screens/GameScreen';

it('renders correctly', () => {
  renderer.create(<GameScreen />);
});
