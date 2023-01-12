import React, { FC, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { ClientContainer, ClientsListContainer, GlobalLayout } from './components';
import { Client } from './api/types';
import { ClientContext } from './contex';

const useStyles = makeStyles()(() => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
}));

const CLIENT_ID_KEY = 'clientID';
const saveClientID = Number(localStorage.getItem(CLIENT_ID_KEY));

const App: FC = () => {
  const { classes } = useStyles();
  const [client, setClient] = useState<Client | null>(null);
  const [clientID, setClientID] = useState<number | null>(saveClientID || null);

  const handelSetClientID = (selectedClientID: number): void => {
    if (selectedClientID === clientID) {
      handleRemoveClientID();
      return;
    }
    setClientID(selectedClientID);
    localStorage.setItem(CLIENT_ID_KEY, String(selectedClientID));
  };

  const handleRemoveClientID = (): void => {
    setClient(null);
    setClientID(null);
    localStorage.removeItem(CLIENT_ID_KEY);
  };

  return (
    <ClientContext.Provider value={{ client, setClient }}>
      <div className={classes.root}>
        <GlobalLayout />
        <ClientsListContainer clientID={clientID} onSetClientID={handelSetClientID} />
        <ClientContainer clientID={clientID} onRemoveClientID={handleRemoveClientID} />
      </div>
    </ClientContext.Provider>
  );
};

export default App;
