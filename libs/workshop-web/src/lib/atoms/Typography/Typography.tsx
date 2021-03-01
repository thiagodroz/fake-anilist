import React from 'react';
import styled from 'styled-components';

import { typographyStyles, StyledTypographyProps } from '@fake-anilist/styles';

import { HtmlTextTag } from '../../../models/Html';

interface TypographyContainerProps extends StyledTypographyProps {
  readonly as?: HtmlTextTag;
}

const TypographyContainer = styled.span<StyledTypographyProps>`
  ${typographyStyles}
`;

export const Typography: React.FC<TypographyContainerProps> = props => {
  return <TypographyContainer {...props} />;
};
