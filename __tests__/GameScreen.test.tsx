import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ThemeManager from '../contexts/ManageThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18 from '../i18n';

import GameScreen from '../src/screens/GameScreen';

const renderComponent = () =>
  renderer
    .create(
      <ThemeManager>
        <I18nextProvider i18n={i18}>
          <GameScreen />
        </I18nextProvider>
      </ThemeManager>,
    )
    .toJSON();

it('renders correctly', () => {
  const tree = renderComponent();
  expect(tree).toMatchSnapshot();
});
