import styled from 'styled-components';
import { FlexStyle } from 'react-native';

import { boxStyles, StyledBoxProps } from '@seller-frontend/styles';

import { HtmlTag } from '../../../models/Html';

export interface BoxProps extends StyledBoxProps {
  readonly as?: HtmlTag;
  readonly overflowY?: FlexStyle['overflow'];
}

export const Box = styled.div<BoxProps>`
  ${boxStyles}
  overflow-y: ${({ overflowY }) => overflowY};
`;
