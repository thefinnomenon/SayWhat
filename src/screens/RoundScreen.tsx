import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components/native';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import { useTranslation } from 'react-i18next';
import { Player } from '@react-native-community/audio-toolkit';
import { AndroidBackHandler } from 'react-navigation-backhandler';
import normalize from '../utilities/responsive';
import gameReducer, { initialState, actions } from '../features/game/gameSlice';
import Button from '../components/Button';
import Score from '../components/Score';
import { Alert, Modal } from 'react-native';
import QuitButton from '../components/QuitButton';

export const RoundScreen = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  const wordList = useNavigationParam('wordList');
  const { default: wordlist } = wordList;
  const [state, dispatch] = useReducer(gameReducer, {
    ...initialState,
    words: wordlist,
  });

  useEffect(() => {
    if (state.isModalVisible) {
      setTimeout(() => dispatch(actions.clearModal()), 3000);
      const win = new Player('win.mp3');
      win.play();
    }
  }, [state.isModalVisible]);

  const onRoundComplete = () => {
    dispatch(actions.endRound());
    navigate('Round');
  };

  const play = (round: number) => {
    navigate('Game', {
      words: state.words,
      round: round,
      onRoundComplete,
    });
  };

  return (
    <>
      <Container>
        <AndroidBackHandler
          onBackPress={() => {
            quitConfirmation(navigate, t);
            return true;
          }}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={state.isModalVisible}
          onRequestClose={() => {
            dispatch(actions.clearModal);
          }}>
          <WinAlert>
            <WinAlertText>{`${t('Team')} ${state.winner} ${t(
              'wins',
            )}!`}</WinAlertText>
          </WinAlert>
        </Modal>
        <TitleContainer>
          <Title>{`${t('Round')} ${state.round}`}</Title>
        </TitleContainer>
        <Spacer flex={1} />
        <ScoreContainer>
          <Score
            teamName="A"
            score={state.teamA}
            disabled={state.scoreWasUpdated}
            onPress={() => dispatch(actions.updateScore('A'))}
          />
          <Spacer flex={1} />
          <Score
            teamName="B"
            score={state.teamB}
            disabled={state.scoreWasUpdated}
            onPress={() => dispatch(actions.updateScore('B'))}
          />
        </ScoreContainer>
        <Spacer flex={3} />
      </Container>
      {state.status === 'PLAYING' ? (
        <BottomButton
          disabled={!state.scoreWasUpdated}
          title={t('START ROUND')}
          onPress={() => play(state.round)}
        />
      ) : (
        <BottomButton
          disabled={!state.scoreWasUpdated}
          title={t('START GAME')}
          onPress={() => {
            dispatch(actions.startGame());
            play(1);
          }}
        />
      )}
    </>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.background};
`;

const WinAlert = styled.View`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 25%;
  margin: auto;
  padding: ${normalize(4)}px;
  background: ${props => props.theme.colors.border};
  border-radius: ${normalize(10)};
`;

const WinAlertText = styled.Text`
  font-size: ${normalize(40)};
  color: ${props => props.theme.colors.text};
`;

const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ScoreContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const Title = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${normalize(48)};
  font-weight: bold;
  margin: ${normalize(8)}px;
`;

const BottomButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${normalize(75)}px;
  border-radius: 0;
  background: ${props => props.theme.colors.primary};
`;

interface SpacerProps {
  flex: number;
}
const Spacer = styled.View<SpacerProps>`
  flex: ${props => props.flex};
`;

// @ts-ignore: react-navigation types
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

// @ts-ignore: react-navigation types
RoundScreen.navigationOptions = ({ navigation, screenProps }) => ({
  title: '',
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

export default RoundScreen;
