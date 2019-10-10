import React from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import Deck from '../components/Deck';

const decks = [
  {
    category: 'Everything',
    imageSrc: require('../../assets/images/everything.jpeg'),
  },
  {
    category: 'Media',
    imageSrc: require('../../assets/images/entertainment.jpeg'),
  },
  {
    category: 'History',
    imageSrc: require('../../assets/images/history.jpeg'),
  },
  {
    category: 'Sports & Games',
    imageSrc: require('../../assets/images/sports.jpeg'),
  },
  {
    category: 'Geography',
    imageSrc: require('../../assets/images/geography.jpeg'),
  },
  {
    category: 'Around The House',
    imageSrc: require('../../assets/images/house.jpeg'),
  },
  {
    category: 'Food & Drink',
    imageSrc: require('../../assets/images/food_and_drink.jpeg'),
  },
  {
    category: 'Plants & Animals',
    imageSrc: require('../../assets/images/animals_and_plants.jpeg'),
  },
];

export const DecksScreen = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <ScrollView>
        <ContentContainer>
          {decks.map(({ category, imageSrc }) => (
            <Deck
              key={category}
              category={category}
              imageSrc={imageSrc}
              onPress={() => navigate('Round', { category })}
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

DecksScreen.navigationOptions = {
  title: 'Decks',
};

export default DecksScreen;
