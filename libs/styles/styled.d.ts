import 'styled-components';

import { lightTheme } from './src/themes/light';

export type Theme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
