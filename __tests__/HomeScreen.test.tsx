import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../src/screens/HomeScreen';

var module = require('react-navigation-hooks');
module.useNavigation = jest.fn().mockImplementation(() => {
  return {
    navigate: jest.fn(),
  };
});

it('renders correctly', () => {
  renderer.create(<HomeScreen />);
});
