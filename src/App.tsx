import React, { FC, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { ClientId, ClientsListContainer, GlobalLayout } from './components';

const useStyles = makeStyles()(() => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
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
      <GlobalLayout />
      <ClientsListContainer clientID={clientID} onSetClientID={handelSetClientID} />
      <ClientId clientID={clientID} />
    </div>
  );
};

export default App;
