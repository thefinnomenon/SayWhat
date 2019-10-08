import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import { useNavigationParam } from 'react-navigation-hooks';
import ListRow from '../components/ListRow';

type ListOptions = {
  key: string;
  value: string;
};

export const SettingListScreen = () => {
  const options = useNavigationParam('options');
  const selectedKey = useNavigationParam('selectedKey');
  const onSelect = useNavigationParam('onSelect');

  const [selectedRow, setSelectedRow] = useState(selectedKey);

  return (
    <Container>
      <ScrollView>
        {options.map(({ key, value }: ListOptions) => (
          <ListRow
            key={key}
            id={key}
            value={value}
            isSelected={selectedRow === key}
            onSelect={val => {
              onSelect(val);
              setSelectedRow(key);
            }}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

// @ts-ignore: react-navigation has messed up types
SettingListScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title', 'Title'),
});

const Container = styled.View<Theme>`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;

export default SettingListScreen;
