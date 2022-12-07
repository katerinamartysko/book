import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { ClientId } from '../components/ClientId';
import ClientsList from '../components/ClientsList';
import { AppTheme } from '../utils/them';

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

const Clients = () => {
  const { classes } = useStyles();
  const [clientID, setClientID] = useState<number | null>(null);

  return (
    <div className={classes.root}>
      <div>
        <ClientsList setClientID={setClientID} />
      </div>
      <div className={classes.clientId}>
        <ClientId clientID={clientID} />
      </div>
    </div>
  );
};

export default Clients;
