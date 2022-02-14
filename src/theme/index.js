import defaultTheme from './default';

import { createTheme } from '@mui/material/';

const overrides = {
  spacing: 4,
  palette: {
    type: 'light',
    primary: {
      main: '#0c0644',
    },
    secondary: {
      main: '#f50057',
    },
    info: {
      main: '#00a7e0',
    },
    warning: {
      main: '#ee7624',
    },
    success: {
      main: '#75bd43',
    },
  },
    typography: {
        fontFamily: [
        'GothamRounded',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        ].join(','),
    },
};

export default {
    default: createTheme({
      ...defaultTheme,
      ...overrides,
  
      typography: {
        fontFamily: [
          'GothamRounded',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ].join(','),
      },

      overrides: {

        MuiInputLabel: {
          shrink: {
            backgroundColor: '#FFFFFF',
            padding: '2px',
            borderRadius: '2px',
          },
        },

      },
    }),
};
