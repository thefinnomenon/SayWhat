import React from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';

type Props = {
  title: string;
  onPress(): void;
};

export const Button = ({ title, onPress }: Props) => (
  <Container onPress={() => onPress()}>
    <Title>{title}</Title>
  </Container>
);

const Container = styled.TouchableOpacity<Theme>`
  flex: 1;
  justify-content: center;
  align-content: center;
  background: ${props => props.theme.colors.primary};
  border-radius: 10px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.primary};
  margin: 10px;
`;

const Title = styled.Text<Theme>`
  color: ${props => props.theme.colors.background};
  font-size: 18;
  text-align: center;
`;

export default Button;
