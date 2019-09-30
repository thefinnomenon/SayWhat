import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

type Props = {} & typeof defaultProps;

const defaultProps = Object.freeze({});
const initialState = Object.freeze({});

export const DecksScreen = (props: Props) => {
  // const {} = props;
  // const [state, setState] = useState(initialState);

  // const myFunc = () => {};

  return (
    <>
      <Text>Decks Screen</Text>
    </>
  );
};

DecksScreen.navigationOptions = {
  title: 'Decks',
};

DecksScreen.defaultProps = defaultProps;

export default DecksScreen;
