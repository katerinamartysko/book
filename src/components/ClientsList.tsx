import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  Avatar,
  Breadcrumbs,
  CircularProgress,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { useClients, useFetching } from '../hooks';
import PostService from '../api/PostServise';
import { getClientsList } from '../store/clients/actions';
import { State } from '../store/store';
import { theme } from '../utils/them';
import { Search } from './Search';

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

interface Props {
  setClientID: (clientID: number | null) => void;
}

const ClientsList: FC<Props> = ({ setClientID }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const clients = useSelector((state: State) => state.clients.clientsList);
  const [search, setSearch] = useState<string | null>(null);

  const searchClients = useClients(clients, search);

  const [fetchClients, isClientsLoading, clientError] = useFetching(async () => {
    const response = await PostService.getClients();
    dispatch(getClientsList(response.data));
  });

  useEffect(() => {
    fetchClients();
  }, []);

  if (isClientsLoading) return <CircularProgress className={classes.load} />;
  if (clientError) return <h1 className="error">Произошла ошибка {clientError}</h1>;
  if (!clients.length) return <h1> No clients found </h1>;
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <List
            component="nav"
            aria-label="mailbox folders"
            subheader={<ListSubheader component="div">Phone book</ListSubheader>}
          >
            {searchClients.map(client => (
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
    </div>
  );
};

export default ClientsList;
