import React, { FC, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { AppTheme } from './utils/them';
import { ClientId, ClientsListContainer } from './components';

const useStyles = makeStyles()((theme: AppTheme) => ({
  root: {
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
