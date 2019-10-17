import * as React from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome5';
import normalize from '../../responsive';

type Props = {
  id: string;
  value: string;
  isSelected: boolean;
  onSelect: (key: string) => void;
};

const ListRow = ({ id, value, isSelected, onSelect }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <RowContainer onPress={() => onSelect(id)}>
        <Title isSelected={isSelected}>{t(value)}</Title>
        {isSelected && <StyledIcon name="check-circle" />}
      </RowContainer>
      <RowDivider />
    </>
  );
};

const RowContainer = styled.TouchableOpacity<Theme>`
  height: ${normalize(46)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

type TitleProps = {
  isSelected: boolean;
} & Theme;

const Title = styled.Text<TitleProps>`
  margin-left: ${normalize(8)}px;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => (props.isSelected ? 'bold' : 'normal')};
  font-size: ${normalize(18)};
`;

const RowDivider = styled.View<Theme>`
  height: ${normalize(1)};
  width: 95%;
  margin: auto;
  background: ${props => props.theme.colors.borderAlt};
`;

const StyledIcon = styled(Icon)`
  font-size: ${normalize(20)};
  margin-right: ${normalize(12)}px;
  color: ${props => props.theme.colors.text};
`;

export default ListRow;
