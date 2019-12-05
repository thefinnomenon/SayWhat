import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import RulesScreen from '../src/screens/RulesScreen';

it('renders correctly', () => {
  const tree = renderer.create(<RulesScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
