import React, { FC, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { ClientContainer, ClientsListContainer, GlobalLayout } from './components';

const useStyles = makeStyles()(() => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
}));

const App: FC = () => {
  const { classes } = useStyles();
  const clientIDKey = 'clientID';
  const saveClientID = Number(localStorage.getItem(clientIDKey));
  const [clientID, setClientID] = useState<number | null>(saveClientID || null);

  const handelSetClientID = (selectedClientID: number): void => {
    if (selectedClientID === clientID) {
      handleRemoveClientID();
      return;
    }
    setClientID(selectedClientID);
    localStorage.setItem(clientIDKey, String(selectedClientID));
  };

  const handleRemoveClientID = (): void => {
    setClientID(null);
    localStorage.removeItem(clientIDKey);
  };

  return (
    <div className={classes.root}>
      <GlobalLayout />
      <ClientsListContainer clientID={clientID} onSetClientID={handelSetClientID} />
      <ClientContainer clientID={clientID} onRemoveClientID={handleRemoveClientID} />
    </div>
  );
};

export default App;
