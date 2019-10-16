import React from 'react';
import { ScrollView } from 'react-native';
import { Theme, ScreenProps } from '../../types';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';

export const RulesScreen = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <ScrollView>
        <Line>
          Sit in a circle with every other person being on the same team.
        </Line>
        <Line>Decide which team is Team A and which is Team B.</Line>
        <Line>Choose the word deck you want to play with.</Line>
        <Line>A member of Team A should start the game</Line>
        <Line>
          The goal is to get your team members to guess the word or phrase that
          you see on the screen without using any of the words on the screen,
          using rhyming words, or spelling the words out.
        </Line>
        <Line>
          When one of your team members shouts the answer, hit the NEXT button
          and pass it to the player to your right.
        </Line>
        <Line>
          The team who is holding the device when the buzzer goes off, loses the
          round.
        </Line>
        <Line>Add a point to the winning team.</Line>
        <Line>First to 5 wins!</Line>
      </ScrollView>
    </Container>
  );
};

RulesScreen.navigationOptions = ({
  screenProps,
}: {
  screenProps: ScreenProps;
}) => ({
  title: screenProps.t('Rules'),
});

const Container = styled.View<Theme>`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;

const Line = styled.Text<Theme>`
  color: ${props => props.theme.colors.text};
  font-size: 20;
  margin: 10px;
`;

export default RulesScreen;
