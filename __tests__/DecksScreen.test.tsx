import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import DecksScreen from '../src/screens/DecksScreen';

it('renders correctly', () => {
  renderer.create(<DecksScreen />);
});
