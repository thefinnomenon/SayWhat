import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import light from '../src/features/theming/themes/light';
import { I18nextProvider } from 'react-i18next';
import i18n from './utilities/i18n';

import SettingsScreen from '../src/screens/SettingsScreen';

describe('The Settings Screen', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store, wrapper: any;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = renderer.create(
      <Provider store={store}>
        <ThemeProvider theme={light}>
          <I18nextProvider i18n={i18n}>
            <SettingsScreen />
          </I18nextProvider>
        </ThemeProvider>
      </Provider>,
    );
  });

  it('renders correctly', () => {
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
