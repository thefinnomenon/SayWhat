import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

type Props = {} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

export const RoundScreen = (props: Props) => {
  // const {} = props;
  // const [state, setState] = useState(initialState);

  // const myFunc = () => {};

  return (
    <>
      <Text>Round Screen</Text>
    </>
  );
};

RoundScreen.navigationOptions = {
  title: 'Round',
};

RoundScreen.defaultProps = defaultProps;

export default RoundScreen;
