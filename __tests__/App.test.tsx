import 'react-native';
import React from 'react';
import 'jest-styled-components';
import renderComponent from '../__utils__/renderComponent';
// @ts-ignore: No types
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import App from '../App';

jest.mock('redux-persist/integration/react', () => ({
  PersistGate: (props: any) => props.children,
}));

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.mock('@react-native-community/audio-toolkit', () => {
  return {
    Player: () => ({
      play: jest.fn(),
      stop: jest.fn(),
      destory: jest.fn(),
    }),
  };
});

it('renders correctly', () => {
  const tree = renderComponent(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
