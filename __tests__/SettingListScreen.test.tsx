import 'react-native';
import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import 'jest-styled-components';

import SettingListScreen from '../src/screens/SettingListScreen';

jest.mock('react-navigation-hooks', () => {
  return {
    useNavigationParam: jest.fn().mockImplementation(param => {
      switch (param) {
        case 'options':
          return [
            { key: '1', value: 'One' },
            { key: '2', value: 'Two' },
            { key: '3', value: 'Three' },
          ];
        case 'selectedKey':
          return '2';
        case 'onSelect':
          return jest.fn();
      }
    }),
  };
});

it('renders correctly', () => {
  const tree = render(<SettingListScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('selecting a row triggers onSelect with the corresponding row value.', () => {
  const { getByText } = render(<SettingListScreen />);
  fireEvent.press(getByText('One'));
  // TODO: How to check that the onSelect function fired
  //expect(onSelect).toBeCalledWith('One');
});

test('selecting a row sets that row as selected', () => {
  const { getByText } = render(<SettingListScreen />);
  fireEvent.press(getByText('One'));
  console.log(getByText('One'));
  // TODO: How to check if the row is now selected
  //expect(getByText('One')).toHaveProperty('pendingProps.isSelected: true');
});
