import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import GameScreen from '../src/screens/GameScreen';

const useNavigation = () => {
  return {
    navigate: jest.fn(),
  };
};

jest.mock('react-navigation-hooks', () => {
  return {
    useNavigationParam: jest.fn().mockImplementation(param => {
      switch (param) {
        case 'words':
          return ['Word1', 'Word2', 'Word3'];
      }
    }),
    useNavigation: jest.fn().mockImplementation(() => {
      return {
        navigate: jest.fn(),
      };
    }),
  };
});

jest.mock('@react-native-community/audio-toolkit', () => {
  return {
    Player: () => ({
      play: jest.fn(),
      stop: jest.fn(),
      destory: jest.fn(),
    }),
  };
});

const mathRandomSpy = jest.spyOn(Math, 'random');
mathRandomSpy.mockImplementation(() => 0.5);

it('renders correctly', () => {
  const tree = renderer.create(<GameScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
