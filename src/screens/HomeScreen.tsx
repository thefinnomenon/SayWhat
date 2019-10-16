import React from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import { Image } from 'react-native';

export const HomeScreen = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  return (
    <Container>
      <Spacer />
      <Logo source={require('../../assets/images/logo.png')} />
      <Spacer />
      <ButtonsContainer>
        <Button onPress={() => navigate('Decks')} title={t('PLAY')} />
        <Spacer />
        <Button onPress={() => navigate('Rules')} title={t('RULES')} />
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

const Logo = styled.Image<Theme>`
  flex: 2;
  margin: auto;
  resize-mode: contain;
`;

const ButtonsContainer = styled.View`
  flex: 2;
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
