import { TextStyle } from 'react-native';
import { css } from 'styled-components';

import { FontFamily, FontWeight, FontStyle, FontSize, Color } from '../themes';

export interface StyledTypographyProps {
  readonly color?: Color;
  readonly fontFamily?: FontFamily;
  readonly fontWeight?: FontWeight;
  readonly fontStyle?: FontStyle;
  readonly fontSize?: FontSize;
  readonly textDecorationLine?: TextStyle['textDecorationLine'];
  readonly textDecorationStyle?: TextStyle['textDecorationStyle'];
  readonly textAlign?: TextStyle['textAlign'];
  readonly textAlignVertical?: TextStyle['textAlignVertical'];
  readonly w?: string;
  readonly h?: string;
}

export const typographyStyles = css<StyledTypographyProps>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme, fontFamily }) =>
    fontFamily ? theme.fonts.families[fontFamily] : theme.fonts.families.body};
  font-style: ${({ fontStyle }) => fontStyle};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ theme, fontSize = 'md' }) =>
    theme.fonts.sizes[fontSize].size};
  line-height: ${({ theme, fontSize = 'md' }) =>
    theme.fonts.sizes[fontSize].lineHeight};
  text-decoration-line: ${({ textDecorationLine }) => textDecorationLine};
  text-decoration-style: ${({ textDecorationStyle }) => textDecorationStyle};
  text-align: ${({ textAlign }) => textAlign};
  vertical-align: ${({ textAlignVertical }) => textAlignVertical};
`;
