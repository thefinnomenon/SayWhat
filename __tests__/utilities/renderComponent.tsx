import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import light from '../../src/features/theming/themes/light';
import dark from '../../src/features/theming/themes/dark';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const renderComponent = (
  component: JSX.Element,
  initialState = { theming: { theme: light }, i18n: { currentLanguage: 'en' } },
  isDarkMode = false,
) => {
  const mockStore = configureStore();
  const store = mockStore(initialState);

  return renderer.create(
    <Provider store={store}>
      <ThemeProvider theme={isDarkMode ? dark : light}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </ThemeProvider>
    </Provider>,
  );
};

export default renderComponent;
