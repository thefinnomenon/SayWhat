import * as React from 'react';
import { Text } from 'react-native';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';

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
        <Title>{t(value)}</Title>
        {isSelected && <SelectIndicator>X</SelectIndicator>}
      </RowContainer>
      <RowDivider />
    </>
  );
};

const RowContainer = styled.TouchableOpacity<Theme>`
  height: 46px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.Text<Theme>`
  margin-left: 8px;
  color: ${(props: Theme) => props.theme.colors.text};
  font-size: 18;
`;

const RowDivider = styled.View<Theme>`
  height: 1px;
  width: 90%;
  margin: auto;
  background: ${(props: Theme) => props.theme.colors.borderAlt};
`;

const SelectIndicator = styled.Text<Theme>`
  margin-right: 8px;
  color: ${(props: Theme) => props.theme.colors.text};
`;

export default ListRow;
