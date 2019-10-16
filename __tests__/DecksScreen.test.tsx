import 'react-native';
import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import 'jest-styled-components';
import ThemeManager from '../contexts/ManageThemeContext';
import { navigate } from '../__mocks__/react-navigation-hooks';
import { I18nextProvider } from 'react-i18next';
import i18 from '../i18n';

import DecksScreen, { decks } from '../src/screens/DecksScreen';

const renderComponent = () =>
  render(
    <ThemeManager>
      <I18nextProvider i18n={i18}>
        <DecksScreen />
      </I18nextProvider>
    </ThemeManager>,
  );

it('renders correctly', () => {
  const tree = renderComponent().toJSON();
  expect(tree).toMatchSnapshot();
});

test('selecting any deck navigates to Round screen and passed the correct category and wordlist', () => {
  const { getByText } = renderComponent();

  decks.map(({ category, wordList }) => {
    fireEvent.press(getByText(category));
    expect(navigate).toHaveBeenCalledWith('Round', { category, wordList });
  });
});
