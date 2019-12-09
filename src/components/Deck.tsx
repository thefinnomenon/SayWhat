import React from 'react';
import styled from 'styled-components/native';
import { ImageSourcePropType, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import normalize from '../utilities/responsive';

interface DeckProps {
  category: string;
  imageSrc: string;
  onPress(category: string): void;
}

export const Deck = ({ category, imageSrc, onPress }: DeckProps) => (
  <Card testID={`DECK_${category}`} onPress={() => onPress(category)}>
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
    borderRadius: normalize(10),
  },
});

const Card = styled.TouchableOpacity`
  height: ${normalize(250)};
  width: 45%;
  margin: ${normalize(8)}px;
  border-radius: ${normalize(10)};
`;

const ImageBackground = styled.ImageBackground`
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
  border-radius: ${normalize(10)};
`;

const Title = styled.Text`
  color: white;
  font-size: ${normalize(28)};
  font-weight: bold;
  padding: ${normalize(8)}px;
  margin-bottom: ${normalize(4)}px;
`;

export default Deck;
