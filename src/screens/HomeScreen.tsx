import React from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import { useNavigation } from 'react-navigation-hooks';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';
import normalize from '../../responsive';

export const HomeScreen = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  return (
    <Container>
      <Spacer />
      <Logo source={require('../../assets/images/logo.png')} />
      <Spacer />
      <ButtonsContainer>
        <StyledButton onPress={() => navigate('Decks')} title={t('PLAY')} />
        <StyledButton onPress={() => navigate('Rules')} title={t('RULES')} />
        <StyledButton
          onPress={() => navigate('Settings')}
          title={t('SETTINGS')}
        />
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
  height: ${normalize(250)};
  width: ${normalize(250)};
  margin: auto;
  resize-mode: contain;
`;

const ButtonsContainer = styled.View`
  height: ${normalize(200)};
  width: ${normalize(300)};
  justify-content: space-between;
  align-content: center;
  margin: auto;
`;

const StyledButton = styled(Button)<Theme>`
  margin: ${normalize(6)}px;
`;

const Spacer = styled.View`
  flex: 1;
`;

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
