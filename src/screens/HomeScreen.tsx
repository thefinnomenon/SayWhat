import React from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';
import Button from '../components/Button';

export const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <LogoContainer>
        <Logo>Say What?!</Logo>
      </LogoContainer>
      <Buttons>
        <Button onPress={() => navigate('Decks')} title="PLAY" />
        <Button onPress={() => navigate('Settings')} title="SETTINGS" />
      </Buttons>
    </Container>
  );
};

const Container = styled.View<Theme>`
  flex: 1;
  justify-content: flex-start;
  align-content: flex-start;
  background: ${props => props.theme.colors.background};
`;

const LogoContainer = styled.View`
  height: 50%;
  width: 100%;
  justify-content: center;
  align-content: center;
`;

const Logo = styled.Text<Theme>`
  font-size: 36;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
`;

const Buttons = styled.View`
  height: 20%;
  width: 60%;
  margin: auto;
`;

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
