import React from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';

type ScoreDisplayProps = {
  teamName: string;
  score: number;
  disabled?: boolean;
  onPress(team: string): void;
};

export const ScoreDisplay = ({
  teamName,
  score,
  disabled,
  onPress,
}: ScoreDisplayProps) => (
  <ScoreDisplayContainer disabled={disabled} onPress={() => onPress(teamName)}>
    <TeamName>{teamName}</TeamName>
    <ScoreContainer>
      <Score>{score}</Score>
    </ScoreContainer>
  </ScoreDisplayContainer>
);

const ScoreDisplayContainer = styled.TouchableOpacity<Theme>`
  flex: 4;
  width: 80%;
  height: 180;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 10;
  background: ${props => props.theme.colors.primary};
`;

const ScoreContainer = styled.View<Theme>`
  flex: 1;
  width: 85%;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10;
  background: ${props => props.theme.colors.background};
`;

const TeamName = styled.Text<Theme>`
  color: ${props => props.theme.colors.background};
  font-size: 24;
  font-weight: bold;
  text-align: center;
  margin: 8px;
`;

const Score = styled.Text<Theme>`
  color: ${props => props.theme.colors.text};
  font-size: 48;
  text-align: center;
`;

export default ScoreDisplay;
