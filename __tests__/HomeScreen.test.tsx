import 'react-native';
import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import 'jest-styled-components';
import { navigate } from '../__mocks__/react-navigation-hooks';
import HomeScreen from '../src/screens/HomeScreen';

it('renders correctly', () => {
  const tree = render(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('navigates to Deck screen on PLAY press', () => {
  const { getByText } = render(<HomeScreen />);
  fireEvent.press(getByText('PLAY'));
  expect(navigate).toHaveBeenCalledWith('Decks');
});

test('navigates to Rules screen on RULES press', () => {
  const { getByText } = render(<HomeScreen />);
  fireEvent.press(getByText('RULES'));
  expect(navigate).toHaveBeenCalledWith('Rules');
});

test('navigates to Settings screen on SETTINGS press', () => {
  const { getByText } = render(<HomeScreen />);
  fireEvent.press(getByText('SETTINGS'));
  expect(navigate).toHaveBeenCalledWith('Settings');
});
