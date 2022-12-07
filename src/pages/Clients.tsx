import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Breadcrumbs,
  CircularProgress,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { getClientsList } from '../store/clients/actions';
import { ClientsId } from '../components/ClientsId';
import { useFetching } from '../hooks/useFetching';
import PostService from '../api/PostServise';
import { State } from '../store/store';
import { makeStyles } from 'tss-react/mui';
import '../App.css';

const useStyles = makeStyles()(() => ({
  list: {
    width: '100%',
  },
  listText: {
    display: 'inline',
  },
  load: {
    justifyContent: 'center',
  },
}));

const Clients = () => {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const clients = useSelector((state: State) => state.clients.clientsList);
  const [clientID, setClientID] = useState<number | null>(null);

  const [fetchClients, isClientsLoading, clientError] = useFetching(async () => {
    const response = await PostService.getClients();
    dispatch(getClientsList(response.data));
  });

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <List
          className={classes.list}
          component="nav"
          aria-label="mailbox folders"
          subheader={
            <ListSubheader component="div" id="сustomer-information">
              Phone book
            </ListSubheader>
          }
        >
          {clients.map(client => (
            <div key={client.id} className={classes.listText}>
              <Fragment>
                <ListItemButton onClick={() => setClientID(client.id)}>
                  <ListItemText primary={client.general.firstName} />
                  <ListItemText primary={client.general.lastName} />
                </ListItemButton>
                <Divider />
              </Fragment>
            </div>
          ))}
        </List>
      </Breadcrumbs>
      {clientError && <h1 className="error">Произошла ошибка {clientError}</h1>}

      {isClientsLoading && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress className={classes.load} />
        </Box>
      )}
      <div>
        <ClientsId clientID={clientID} />
      </div>
    </div>
  );
};

export default Clients;
