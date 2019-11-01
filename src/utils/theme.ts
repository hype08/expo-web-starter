// import original module declarations
import { DefaultTheme } from 'styled-components/native';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      lightGrey: string;
      whiteColor: string;
      darkBlue: string;
    };
    spacing: {
      tiny: number;
      small: number;
      medium: number;
      large: number;
    };
  }
}

// Export theme implementing interface
export const theme: DefaultTheme = {
  colors: {
    lightGrey: 'rgb(162, 162, 162)',
    whiteColor: '#F0F3F5',
    darkBlue: '#3C4560',
  },
  spacing: {
    large: 30,
    medium: 20,
    small: 15,
    tiny: 10,
  },
};
