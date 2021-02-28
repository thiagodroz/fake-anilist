import { DefaultTheme } from 'styled-components';

import { Spacing } from '../themes';

export const marginOrPaddingFromSpacing = (
  theme: DefaultTheme,
  spacing: Spacing | Spacing[] | undefined,
  defaultValue?: string | undefined,
): string => {
  if (spacing === undefined) return defaultValue || '0';

  if (typeof spacing === 'string') return theme.spacing[spacing];

  return spacing.reduce((acc, s) => `${acc} ${theme.spacing[s]}`, '');
};
