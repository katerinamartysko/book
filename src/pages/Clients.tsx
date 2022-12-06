import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Divider, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
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
}));

const Clients = () => {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const clients = useSelector((state: State) => state.clients.clientsList);
  const [clientID, setClientID] = useState<number | null>(null);

  const [fetchClients] = useFetching(async () => {
    const response = await PostService.getClients();
    dispatch(getClientsList(response.data));
  });

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <div className="root">
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

      <ClientsId clientID={clientID} />
    </div>
  );
};

export default Clients;
