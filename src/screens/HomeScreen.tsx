import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

type Props = {} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

export const HomeScreen = (props: Props) => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Logo>Say What?!</Logo>
      <Buttons>
        <Button onPress={() => navigate('Decks')} title="PLAY" />
        <Button onPress={() => navigate('Settings')} title="SETTINGS" />
      </Buttons>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-content: space-between;
`;

const Logo = styled.Text`
  position: absolute;
  top: 200px;
  width: 100%;
  font-size: 36;
  color: red;
  text-align: center;
`;

const Buttons = styled.View`
  position: absolute;
  top: 400px;
  right: 0;
  width: 100%;
`;

HomeScreen.navigationOptions = {
  header: null,
};

HomeScreen.defaultProps = defaultProps;

export default HomeScreen;
