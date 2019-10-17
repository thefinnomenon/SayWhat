import React, { useState, useEffect } from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import { Button } from '../components/Button';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import { useTranslation } from 'react-i18next';
import { Player } from '@react-native-community/audio-toolkit';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import { Alert } from 'react-native';
import QuitButton from '../components/QuitButton';
import normalize from '../../responsive';

const ROUND_LENGTH_MS = 54000;

export const GameScreen = () => {
  const words = useNavigationParam('words');
  const round = useNavigationParam('round');
  const onRoundComplete = useNavigationParam('onRoundComplete');
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const getRandomWord = () => {
    return words[Math.round(Math.round(Math.random() * (words.length - 1)))];
  };

  const [word, setWord] = useState(getRandomWord());
  const [isPlayable, setIsPlayable] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => onRoundComplete(round), ROUND_LENGTH_MS);
    return () => clearTimeout(timer);
  }, [onRoundComplete, round]);

  useEffect(() => {
    const playableTimer = setTimeout(
      () => setIsPlayable(false),
      ROUND_LENGTH_MS - 1000,
    );
    return () => clearTimeout(playableTimer);
  }, []);

  useEffect(() => {
    const beep = new Player('beep.mp3', { autoDestroy: false });
    beep.play();
    const beepRateTimeout = setTimeout(() => beep.stop(), ROUND_LENGTH_MS);
    return () => {
      clearTimeout(beepRateTimeout);
      beep.destroy();
    };
  }, []);

  return (
    <>
      <AndroidBackHandler
        onBackPress={() => {
          quitConfirmation(navigate, t);
          return false;
        }}
      />
      <Container>
        <WordContainer>
          <Word>{word}</Word>
        </WordContainer>
        <Spacer flex={3} />
      </Container>
      <BottomButton
        disabled={!isPlayable}
        title={t('NEXT')}
        onPress={() => setWord(getRandomWord())}
      />
    </>
  );
};

// @ts-ignore: react-navigation has messed up types
const quitConfirmation = (navigate, t) =>
  Alert.alert(
    t('Quit Confirmation'),
    t('Are you sure you want to quit the current game?'),
    [
      {
        text: t('Cancel'),
        style: 'cancel',
      },
      {
        text: t('Yes'),
        onPress: () => navigate('Home'),
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
  font-size: ${normalize(48)};
  font-weight: bold;
  margin: ${normalize(8)}px;
`;

const BottomButton = styled(Button)<Theme>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${normalize(80)}px;
  border-radius: 0;
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
  title: `${screenProps.t('Round')} ${navigation.getParam('round', '')}`,
  gesturesEnabled: false,
  headerTintColor: screenProps.theme.colors.text,
  headerStyle: {
    backgroundColor: screenProps.theme.colors.background,
    borderBottomWidth: 0,
  },
  headerLeft: (
    <QuitButton
      onPress={() => quitConfirmation(navigation.navigate, screenProps.t)}
    />
  ),
});

export default GameScreen;
