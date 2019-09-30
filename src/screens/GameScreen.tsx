import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

type Props = {} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

export const GameScreen = (props: Props) => {
  // const {} = props;
  // const [state, setState] = useState(initialState);

  // const myFunc = () => {};

  return (
    <>
      <Text>Game Screen</Text>
    </>
  );
};

GameScreen.navigationOptions = {
  title: 'Game',
};

GameScreen.defaultProps = defaultProps;

export default GameScreen;
