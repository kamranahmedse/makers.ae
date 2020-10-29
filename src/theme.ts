import { ITheme, theme as chakraTheme } from '@chakra-ui/core';

export const theme: ITheme = {
  ...chakraTheme,
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
    mono: 'Inter, sans-serif'
  }
};
