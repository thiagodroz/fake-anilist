import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',

  // colorPrimary: lightTheme.colors.primary,
  // colorSecondary: lightTheme.colors.secondary,

  // Typography
  fontBase: `Overpass, -apple-system, BlinkMacSystemFont, "San Francisco", Roboto, "Segoe UI", "Helvetica Neue", sans-serif`,
  fontCode: "'Fira Code', monospace",

  // Text colors
  // textColor: lightTheme.colors.textBody,
  // textInverseColor: lightTheme.colors.textOverPrimaryBg,

  // Toolbar default and active colors
  // barTextColor: lightTheme.colors.textOverPrimaryBg,
  // barSelectedColor: lightTheme.colors.primary,
  // barBg: lightTheme.colors.secondary,

  brandTitle: 'Fake Anilist',
  brandUrl: 'https://fake-anilist.netlify.app',
  brandImage: 'https://anilist.co/img/icons/icon.svg',
});
