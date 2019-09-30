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
    <>
      <Text>Home Screen</Text>
      <Button onPress={() => navigate('Decks')} title="Decks" />
      <Button onPress={() => navigate('Game')} title="Game" />
      <Button onPress={() => navigate('Round')} title="Round" />
    </>
  );
};

HomeScreen.navigationOptions = {
  title: 'Home',
};

HomeScreen.defaultProps = defaultProps;

export default HomeScreen;
