import * as React from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';

import { Chevron } from './Chevron';

export interface Props {
  title: string;
  onPress?: () => void;
  showChevron?: boolean;
  renderAccessory?: () => React.ReactElement<any>;
}

export const Row = ({
  title,
  onPress,
  showChevron,
  renderAccessory,
}: Props) => (
  <Container>
    <ContentContainer onPress={onPress} disabled={onPress === undefined}>
      <TitlesContainer>
        <Title numberOfLines={1}>{title}</Title>
      </TitlesContainer>
      {renderAccessory && renderAccessory()}
      {showChevron && <Chevron />}
    </ContentContainer>
  </Container>
);

const ContentContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  padding-left: 15;
  align-items: center;
`;

const Container = styled.View`
  background-color: transparent;
  height: 46px;
  align-items: stretch;
`;

const TitlesContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-self: stretch;
`;

const Title = styled.Text<Theme>`
  color: ${(props: Theme) => props.theme.colors.text};
  font-size: 18;
  margin-right: 15;
`;

export default Row;
