import React from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import normalize from '../../responsive';

type Props = {
  title: string;
  onPress(): void;
  disabled?: boolean;
  style?: {};
};

export const Button = ({ title, onPress, disabled, style }: Props) => (
  <Container disabled={disabled} onPress={() => onPress()} style={style}>
    <Title>{title}</Title>
  </Container>
);

const Container = styled.TouchableOpacity<Theme>`
  flex: 1;
  justify-content: center;
  align-content: center;
  background: ${props => props.theme.colors.primary};
  border-radius: ${normalize(10)};
`;

const Title = styled.Text<Theme>`
  color: ${props => props.theme.colors.background};
  font-size: ${normalize(20)};
  font-weight: bold;
  text-align: center;
`;

export default Button;
