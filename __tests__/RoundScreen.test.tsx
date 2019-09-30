import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import RoundScreen from '../src/screens/RoundScreen';

it('renders correctly', () => {
  renderer.create(<RoundScreen />);
});
