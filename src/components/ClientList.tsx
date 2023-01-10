import React, { FC } from 'react';
import { Avatar, Breadcrumbs, Divider, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { theme } from '../utils/them';
import { ClientList as IClientList } from '../api/types';

interface Props {
  clients: Array<IClientList>;
  setClientID: (clientID: number | null) => void;
}

const useStyles = makeStyles()(() => ({
  list: {
    display: 'flex',
    flexDirection: 'row',
  },
  load: {
    justifyContent: 'center',
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  divider: {
    marginLeft: theme.spacing(5),
  },
}));

export const ClientList: FC<Props> = ({ clients, setClientID }) => {
  const { classes } = useStyles();
  if (!clients.length) return <h1> No clients found </h1>;
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <List
          component="nav"
          aria-label="mailbox folders"
          subheader={<ListSubheader component="div">Phone book</ListSubheader>}
        >
          {clients.map(client => (
            <div key={client.id}>
              <div className={classes.list}>
                <Avatar alt="Remy Sharp" src={client.general.avatar} className={classes.avatar} />
                <ListItemButton onClick={() => setClientID(client.id)}>
                  <ListItemText primary={client.general.firstName} />
                  <ListItemText primary={client.general.lastName} />
                </ListItemButton>
              </div>
              <Divider className={classes.divider} />
            </div>
          ))}
        </List>
      </Breadcrumbs>
    </div>
  );
};
