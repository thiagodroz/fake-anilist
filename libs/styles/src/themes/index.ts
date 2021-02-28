import { lightTheme } from './light';

export * from './light';

export type Theme = typeof lightTheme;
export type Color = keyof Theme['colors'];
export type FontSize = keyof Theme['fonts']['sizes'];
export type FontFamily = keyof Theme['fonts']['families'];
export type FontStyle = keyof Theme['fonts']['styles'];
export type FontWeight = keyof Theme['fonts']['weights'];
export type Spacing = keyof Theme['spacing'];
