import React from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

export const HomeScreen = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  return (
    <Container>
      <LogoContainer>
        <Logo>Say What?!</Logo>
      </LogoContainer>
      <ButtonsContainer>
        <Button onPress={() => navigate('Decks')} title={t('PLAY')} />
        <Spacer />
        <Button onPress={() => navigate('Settings')} title={t('SETTINGS')} />
      </ButtonsContainer>
      <Spacer />
    </Container>
  );
};

const Container = styled.View<Theme>`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;

const LogoContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-content: center;
`;

const Logo = styled.Text<Theme>`
  font-size: 36;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
`;

const ButtonsContainer = styled.View`
  flex: 1;
  width: 80%;
  justify-content: space-around;
  align-content: center;
  margin: auto;
`;

const Spacer = styled.View`
  flex: 1;
`;

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
