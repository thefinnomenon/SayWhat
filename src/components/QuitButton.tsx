import React from 'react';
import { Theme } from '../../types';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import normalize from '../../responsive';

type Props = {
  onPress(): void;
} & typeof defaultProps;

const defaultProps = Object.freeze({});

export const QuitButton = ({ onPress }: Props) => (
  <TouchableOpacity onPress={() => onPress()}>
    <StyledIcon name="times" />
  </TouchableOpacity>
);

const StyledIcon = styled(Icon)<Theme>`
  font-size: ${normalize(20)};
  margin-left: ${normalize(20)}px;
  color: ${props => props.theme.colors.textAlt};
`;

QuitButton.defaultProps = defaultProps;

export default QuitButton;
