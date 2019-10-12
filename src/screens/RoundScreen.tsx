import React, { useState, useEffect } from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';
import { useTranslation } from 'react-i18next';
//@ts-ignore
import ConfettiCannon from 'react-native-confetti-cannon';
import Button from '../components/Button';
import Score from '../components/Score';
import { Button as Btn, Alert } from 'react-native';
import QuitButton from '../components/QuitButton';

const SCORE_GOAL = 5;

const initialState = Object.freeze({
  words: [],
  winner: '',
  round: 1,
  teamA: 0,
  teamB: 0,
  scoreWasUpdated: true,
});

export const RoundScreen = () => {
  // TODO: get category from navigation params and load that wordlist
  const category = 'media';
  const [words, setWords] = useState(initialState.words);
  const [winner, setWinner] = useState(initialState.winner);
  const [round, setRound] = useState(initialState.round);
  const [teamA, setTeamA] = useState(initialState.teamA);
  const [teamB, setTeamB] = useState(initialState.teamB);
  const [scoreWasUpdated, setScoreWasUpdated] = useState(
    initialState.scoreWasUpdated,
  );

  useEffect(() => {
    const { default: wordlist } = require('../../constants/wordlists/media');
    setWords(wordlist);
  }, [category]);

  const { navigate } = useNavigation();
  const { t } = useTranslation();

  const updateScore = (team: string) => {
    switch (team) {
      case 'A':
        setTeamA(teamA + 1);
        if (teamA + 1 === SCORE_GOAL) {
          setWinner('A');
        }
        break;
      case 'B':
        setTeamB(teamB + 1);
        if (teamB + 1 === SCORE_GOAL) {
          setWinner('B');
        }
    }

    setScoreWasUpdated(true);
  };

  const onRoundComplete = () => {
    setRound(round + 1);
    setScoreWasUpdated(false);
    navigate('Round');
  };

  const startRound = () => {
    navigate('Game', { title: `Round ${round}`, words, onRoundComplete });
  };

  const restartGame = () => {
    setRound(initialState.round);
    setWinner(initialState.winner);
    setTeamA(initialState.teamA);
    setTeamB(initialState.teamB);
    setScoreWasUpdated(initialState.scoreWasUpdated);
    // TODO: On restart, when coming back from first round, it increments the old round count
    navigate('Game', { title: `Round ${1}`, words, onRoundComplete });
  };

  const startButton = () => {
    if (round === 1) {
      return (
        <BottomButton
          disabled={!scoreWasUpdated}
          title="START GAME"
          onPress={() => startRound()}
        />
      );
    }
    if (winner !== '') {
      return (
        <BottomButton
          disabled={!scoreWasUpdated}
          title="START NEW GAME"
          onPress={() => restartGame()}
        />
      );
    }
    return (
      <BottomButton
        disabled={!scoreWasUpdated}
        title="START ROUND"
        onPress={() => startRound()}
      />
    );
  };

  return (
    <>
      <Container>
        {winner !== '' && (
          <ConfettiCannon count={200} origin={{ x: 0, y: 0 }} />
        )}
        <TitleContainer>
          <Title>{`Round ${round}`}</Title>
        </TitleContainer>
        <ScoreContainer>
          <Score
            teamName="A"
            score={teamA}
            disabled={scoreWasUpdated}
            onPress={() => updateScore('A')}
          />
          <Spacer flex={1} />
          <Score
            teamName="B"
            score={teamB}
            disabled={scoreWasUpdated}
            onPress={() => updateScore('B')}
          />
        </ScoreContainer>
        <Spacer flex={2} />
      </Container>
      {startButton()}
    </>
  );
};

const Container = styled.View<Theme>`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.background};
`;

const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ScoreContainer = styled.View<Theme>`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const Title = styled.Text<Theme>`
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

// @ts-ignore: react-navigation has messed up types
RoundScreen.navigationOptions = ({ navigation, screenProps }) => ({
  title: '',
  headerTintColor: screenProps.theme.colors.text,
  headerStyle: {
    backgroundColor: screenProps.theme.colors.background,
    borderBottomWidth: 0,
  },
  headerLeft: <QuitButton onPress={() => quitConfirmation(navigation)} />,
});

export default RoundScreen;
