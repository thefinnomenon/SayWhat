import 'react-native';
import React, { ReactNode } from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
// @ts-ignore: No types
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import App from '../App';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.mock('react-native-code-push', () => {
  const cp = (opts: {}) => (app: ReactNode) => app;
  Object.assign(cp, {
    InstallMode: {},
    CheckFrequency: {},
    SyncStatus: {},
    UpdateState: {},
    DeploymentStatus: {},
    DEFAULT_UPDATE_DIALOG: {},

    checkForUpdate: jest.fn(),
    codePushify: jest.fn(),
    getConfiguration: jest.fn(),
    getCurrentPackage: jest.fn(),
    getUpdateMetadata: jest.fn(),
    log: jest.fn(),
    notifyAppReady: jest.fn(),
    notifyApplicationReady: jest.fn(),
    sync: jest.fn(),
  });
  return cp;
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

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
