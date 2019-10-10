import React, { useState } from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import { Button } from '../components/Button';
import { useNavigationParam } from 'react-navigation-hooks';
import { Button as Btn, Alert } from 'react-native';

export const GameScreen = () => {
  const words = useNavigationParam('words');

  const getRandomWord = () => {
    return words[Math.round(Math.round(Math.random() * (words.length - 1)))];
  };

  const [word, setWord] = useState(getRandomWord());

  return (
    <>
      <Container>
        <WordContainer>
          <Word>{word}</Word>
        </WordContainer>
        <Spacer flex={3} />
      </Container>
      <BottomButton title="NEXT" onPress={() => setWord(getRandomWord())} />
    </>
  );
};

// @ts-ignore: react-navigation has messed up types
const quitConfirmation = navigation =>
  Alert.alert(
    'Quit Confirmation',
    'Are you sure you want to quit the current game?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => navigation.navigate('Home'),
      },
    ],
    { cancelable: true },
  );

const Container = styled.View<Theme>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};
`;

const WordContainer = styled.View`
  flex: 6;
  justify-content: center;
  align-items: center;
`;

const Word = styled.Text<Theme>`
  color: ${props => props.theme.colors.text};
  font-size: 48;
  font-weight: bold;
  margin: 8px;
`;

const BottomButton = styled(Button)<Theme>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: ${props => props.theme.colors.primary};
`;

type SpacerProps = {
  flex: number;
};
const Spacer = styled.View<SpacerProps>`
  flex: ${props => props.flex};
`;

// @ts-ignore: react-navigation has messed up types
GameScreen.navigationOptions = ({ navigation, screenProps }) => ({
  title: navigation.getParam('title', ''),
  headerTintColor: screenProps.theme.colors.text,
  headerStyle: {
    backgroundColor: screenProps.theme.colors.background,
    borderBottomWidth: 0,
  },
  headerLeft: (
    <Btn
      onPress={() => quitConfirmation(navigation)}
      title="Quit"
      color={screenProps.theme.colors.textAlt}
    />
  ),
});

export default GameScreen;
