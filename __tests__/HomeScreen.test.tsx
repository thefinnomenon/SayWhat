import 'react-native';
import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import 'jest-styled-components';
import ThemeManager from '../contexts/ManageThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18 from '../i18n';
import { navigate } from '../__mocks__/react-navigation-hooks';
import HomeScreen from '../src/screens/HomeScreen';

const renderComponent = () =>
  render(
    <ThemeManager>
      <I18nextProvider i18n={i18}>
        <HomeScreen />
      </I18nextProvider>
    </ThemeManager>,
  );

it('renders correctly', () => {
  const tree = renderComponent().toJSON();
  expect(tree).toMatchSnapshot();
});

test('navigates to Deck screen on PLAY press', () => {
  const { getByText } = renderComponent();
  fireEvent.press(getByText('PLAY'));
  expect(navigate).toHaveBeenCalledWith('Decks');
});

test('navigates to Rules screen on RULES press', () => {
  const { getByText } = renderComponent();
  fireEvent.press(getByText('RULES'));
  expect(navigate).toHaveBeenCalledWith('Rules');
});

test('navigates to Settings screen on SETTINGS press', () => {
  const { getByText } = renderComponent();
  fireEvent.press(getByText('SETTINGS'));
  expect(navigate).toHaveBeenCalledWith('Settings');
});
