import React from 'react';
import styled from 'styled-components/native';
import normalize from '../utilities/responsive';

interface ScoreDisplayProps {
  teamName: string;
  score: number;
  disabled?: boolean;
  onPress(team: string): void;
}

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

const ScoreDisplayContainer = styled.TouchableOpacity`
  flex: 4;
  width: 80%;
  height: 100%;
  height: ${normalize(180)};
  justify-content: center;
  align-items: center;
  padding: ${normalize(4)}px;
  border-radius: ${normalize(10)};
  background: ${props => props.theme.colors.primary};
`;

const ScoreContainer = styled.View`
  flex: 1;
  width: 85%;
  margin: ${normalize(10)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${normalize(10)};
  background: ${props => props.theme.colors.background};
`;

const TeamName = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: ${normalize(24)};
  font-weight: bold;
  text-align: center;
  margin: ${normalize(8)}px;
`;

const Score = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${normalize(48)};
  text-align: center;
`;

export default ScoreDisplay;
