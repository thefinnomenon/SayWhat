import 'react-native';
import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import 'jest-styled-components';
import { navigate } from '../__mocks__/react-navigation-hooks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import light from '../src/features/theming/themes/light';
import { I18nextProvider } from 'react-i18next';
import i18n from './__helpers__/i18n';

import DecksScreen, { decks } from '../src/screens/DecksScreen';

describe('The Decks Screen', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();

  const renderWrappedComponent = () => {
    const store = mockStore(initialState);

    return render(
      <Provider store={store}>
        <ThemeProvider theme={light}>
          <I18nextProvider i18n={i18n}>
            <DecksScreen />
          </I18nextProvider>
        </ThemeProvider>
      </Provider>,
    );
  };

  it('renders correctly', () => {
    const tree = renderWrappedComponent().toJSON();
    expect(tree).toMatchSnapshot();
  });

  // test('selecting any deck navigates to Round screen and passes the correct category and wordlist', () => {
  //   const { getByText } = renderWrappedComponent();

  //   decks.map(({ category, wordList }) => {
  //     fireEvent.press(getByText(category));
  //     expect(navigate).toHaveBeenCalledWith('Round', { category, wordList });
  //   });
  // });
});
