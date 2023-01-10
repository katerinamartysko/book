import React, { FC } from 'react';
import { GlobalStyles } from '@mui/material';

export const GlobalLayout: FC = () => {
  return (
    <GlobalStyles
      styles={() => ({
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          fontFamily: 'Open Sans',
        },
        html: {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          height: '100%',
          width: '100%',
        },
        body: {
          height: '100%',
          width: '100%',
        },
        '#root': {
          height: '100%',
          width: '100%',
        },
        a: {
          textDecoration: 'none',
          color: 'lightblue',
        },
      })}
    />
  );
};
