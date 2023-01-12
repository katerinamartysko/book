import { createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    main: '#000000',
    light: '#ffffff',
    dark: '#000000',
    contrastText: '#ff0000',
  },
};

export const theme = createTheme({
  palette,
});

export type AppTheme = typeof theme;
