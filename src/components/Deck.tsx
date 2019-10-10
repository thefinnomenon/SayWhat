import React from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type DeckProps = {
  category: string;
  imageSrc: string;
  onPress(category: string): void;
};

export const Deck = ({ category, imageSrc, onPress }: DeckProps) => (
  <Card onPress={() => onPress(category)}>
    <ImageBackground
      source={imageSrc as ImageSourcePropType}
      imageStyle={styles.image}>
      <Scrim
        start={{ x: 0, y: 0.3 }}
        end={{ x: 0, y: 1 }}
        colors={['transparent', 'rgba(0,0,0,0.7)']}
      />
      <Title numberOfLines={2} adjustsFontSizeToFit>
        {category}
      </Title>
    </ImageBackground>
  </Card>
);

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
  },
});

const Card = styled.TouchableOpacity<Theme>`
  height: 250px;
  width: 45%;
  margin: 8px;
  border-radius: 10px;
`;

const ImageBackground = styled.ImageBackground<Theme>`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const Scrim = styled(LinearGradient)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  border-radius: 10;
`;

const Title = styled.Text<Theme>`
  color: white;
  font-size: 28;
  font-weight: bold;
  padding: 8px;
  margin-bottom: 4px;
`;

export default Deck;
