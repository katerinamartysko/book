import { GlobalStyles } from '@mui/material';
import React, { FC, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { ClientId, ClientsListContainer } from './components';
import { AppTheme } from './utils';

const useStyles = makeStyles()((theme: AppTheme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  clientId: {
    marginLeft: theme.spacing(25),
    marginTop: theme.spacing(20),
    justifyContent: 'center',
  },
}));

const App: FC = () => {
  const { classes } = useStyles();
  const clientIDKey = 'clientID';
  const saveClientID = Number(localStorage.getItem(clientIDKey));
  const [clientID, setClientID] = useState<number | null>(saveClientID || null);

  const handelSetClientID = (clientID: number): void => {
    setClientID(clientID);
    localStorage.setItem(clientIDKey, String(clientID));
  };

  return (
    <div className={classes.root}>
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
      <div>
        <ClientsListContainer clientID={clientID} onSetClientID={handelSetClientID} />
      </div>
      <div className={classes.clientId}>
        <ClientId clientID={clientID} />
      </div>
    </div>
  );
};

export default App;
