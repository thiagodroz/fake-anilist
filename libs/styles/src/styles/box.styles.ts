import { FlexStyle, TextStyle } from 'react-native';
import { css } from 'styled-components';

import { Color, Spacing } from '../themes';
import { marginOrPaddingFromSpacing } from '../utils/spacing';

export interface StyledBoxProps extends FlexStyle, TextStyle {
  // Flex
  readonly align?: FlexStyle['alignItems'];
  readonly justify?: FlexStyle['justifyContent'];
  // Size
  readonly w?: FlexStyle['width'];
  readonly h?: FlexStyle['height'];
  readonly mw?: FlexStyle['maxWidth'];
  readonly mh?: FlexStyle['maxHeight'];
  readonly minw?: FlexStyle['minWidth'];
  readonly minh?: FlexStyle['minHeight'];
  // Spacing
  readonly m?: Spacing | Spacing[];
  readonly p?: Spacing | Spacing[];
  // Border
  readonly borderColor?: Color | string;
  // Background
  readonly bg?: string;
}

export const boxStyles = css<StyledBoxProps>`
  /* Flex */
  display: flex;
  justify-content: ${({ justifyContent, justify }) =>
    justify || justifyContent};
  align-items: ${({ alignItems, align }) => align || alignItems};
  flex: ${({ flex }) => flex};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-wrap: ${({ flexWrap }) => flexWrap};

  /* Size */
  width: ${({ w, width }) => w || width};
  height: ${({ h, height }) => h || height};
  max-width: ${({ mw, maxWidth }) => mw || maxWidth};
  max-height: ${({ mh, maxHeight }) => mh || maxHeight};
  min-width: ${({ minw }) => minw};
  min-height: ${({ minh }) => minh};

  /* Spacing */
  margin: ${({ theme, m }) => marginOrPaddingFromSpacing(theme, m)};
  padding: ${({ theme, p }) => marginOrPaddingFromSpacing(theme, p)};

  /* Border */
  border-color: ${({ theme, borderColor }) =>
    borderColor && borderColor in theme.colors
      ? theme.colors[borderColor]
      : borderColor};
  border-width: ${({ borderWidth }) => (borderWidth ? `${borderWidth}px` : 0)};
  border-top-width: ${({ borderTopWidth }) =>
    borderTopWidth && `${borderTopWidth}px`};
  border-right-width: ${({ borderRightWidth }) =>
    borderRightWidth && `${borderRightWidth}px`};
  border-bottom-width: ${({ borderBottomWidth }) =>
    borderBottomWidth && `${borderBottomWidth}px`};
  border-left-width: ${({ borderLeftWidth }) =>
    borderLeftWidth && `${borderLeftWidth}px`};
  border-radius: ${({ borderRadius }) => borderRadius && `${borderRadius}px`};
  border-style: ${({
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
  }) =>
    (borderWidth ||
      borderTopWidth ||
      borderRightWidth ||
      borderBottomWidth ||
      borderLeftWidth) &&
    'solid'};

  /* Background */
  background-color: ${({ theme, bg }) =>
    bg && bg in theme.colors ? theme.colors[bg] : bg};

  /* Font */
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ theme, color }) =>
    color && color in theme.colors ? theme.colors[color] : color};
  font-style: ${({ fontStyle }) => fontStyle};
  font-size: ${({ fontSize }) => fontSize && `${fontSize}px`};
  line-height: ${({ lineHeight }) => lineHeight};
`;
