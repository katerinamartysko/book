import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Divider, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { getClientsList } from '../store/clients/actions';
import { ClientsId } from '../components/ClientsId';
import { useFetching } from '../hooks/useFetching';
import PostService from '../api/PostServise';
import { State } from '../store/store';
import '../App.css';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const Clients = () => {
  const dispatch = useDispatch();
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
          sx={style}
          component="nav"
          aria-label="mailbox folders"
          subheader={
            <ListSubheader component="div" id="сustomer-information">
              Phone book
            </ListSubheader>
          }
        >
          {clients.map(client => (
            <Fragment key={client.id}>
              <ListItemButton onClick={() => setClientID(client.id)}>
                <ListItemText primary={client.general.firstName} secondary={client.general.lastName} />
              </ListItemButton>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Breadcrumbs>

      <ClientsId clientID={clientID} />
    </div>
  );
};

export default Clients;
