import * as React from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export interface Props {
  icon?: Element;
  title: string;
  onPress?: () => void;
  showChevron?: boolean;
  renderAccessory?: () => React.ReactElement<any>;
}

export const Row = ({
  icon,
  title,
  onPress,
  showChevron,
  renderAccessory,
}: Props) => (
  <Container>
    <ContentContainer onPress={onPress} disabled={onPress === undefined}>
      <TitlesContainer>
        {icon}
        <Title numberOfLines={1}>{title}</Title>
      </TitlesContainer>
      <AccessoryContainer>
        {renderAccessory && renderAccessory()}
      </AccessoryContainer>
      {showChevron && <StyledIcon name="chevron-right" />}
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
  flex-direction: row;
  justify-content: flex-start;
  align-self: center;
`;

const Title = styled.Text<Theme>`
  color: ${props => props.theme.colors.text};
  font-size: 18;
  margin-right: 15;
`;

const AccessoryContainer = styled.View`
  margin-right: 12px;
`;

const StyledIcon = styled(Icon)<Theme>`
  font-size: 18;
  margin-right: 12px;
  color: ${props => props.theme.colors.text};
`;

export default Row;
