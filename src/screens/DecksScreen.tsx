import React from 'react';
import { Theme, ScreenProps } from '../../types';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { useTranslation } from 'react-i18next';
import Deck from '../components/Deck';

export const decks = [
  {
    category: 'Everything',
    imageSrc: require('../../assets/images/everything.jpeg'),
    wordList: require('../../assets/wordlists/everything.ts'),
  },
  {
    category: 'Media',
    imageSrc: require('../../assets/images/entertainment.jpeg'),
    wordList: require('../../assets/wordlists/media.ts'),
  },
  {
    category: 'History',
    imageSrc: require('../../assets/images/history.jpeg'),
    wordList: require('../../assets/wordlists/history.ts'),
  },
  {
    category: 'Sports & Games',
    imageSrc: require('../../assets/images/sports.jpeg'),
    wordList: require('../../assets/wordlists/sports_and_games.ts'),
  },
  {
    category: 'Geography',
    imageSrc: require('../../assets/images/geography.jpeg'),
    wordList: require('../../assets/wordlists/geography.ts'),
  },
  {
    category: 'Around The House',
    imageSrc: require('../../assets/images/house.jpeg'),
    wordList: require('../../assets/wordlists/around_the_house.ts'),
  },
  {
    category: 'Food & Drink',
    imageSrc: require('../../assets/images/food_and_drink.jpeg'),
    wordList: require('../../assets/wordlists/food_and_drink.ts'),
  },
  {
    category: 'Plants & Animals',
    imageSrc: require('../../assets/images/animals_and_plants.jpeg'),
    wordList: require('../../assets/wordlists/animals_and_plants.ts'),
  },
];

export const DecksScreen = () => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  return (
    <Container>
      <ScrollView>
        <ContentContainer>
          {decks.map(({ category, imageSrc, wordList }) => (
            <Deck
              key={category}
              category={t(category)}
              imageSrc={imageSrc}
              onPress={() => navigate('Round', { category, wordList })}
            />
          ))}
        </ContentContainer>
      </ScrollView>
    </Container>
  );
};

const Container = styled.View<Theme>`
  flex: 1;
  background: ${props => props.theme.colors.background};
`;

const ContentContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4px;
`;

DecksScreen.navigationOptions = ({
  screenProps,
}: {
  screenProps: ScreenProps;
}) => ({
  title: screenProps.t('Decks'),
});

export default DecksScreen;
