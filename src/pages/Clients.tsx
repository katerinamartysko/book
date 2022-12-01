import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Breadcrumbs, Divider, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import { getClients } from '../store/clients/actions';
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
  const clients = useSelector((state: State) => state.clients.clients);

  const [fetchClients] = useFetching(async () => {
    const response = await PostService.getClients();
    dispatch(getClients(response.data));
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
              <ListItem>
                <ListItemText primary={client.general.firstName} secondary={client.general.lastName} />
              </ListItem>
              <Divider />
            </Fragment>
          ))}
        </List>
      </Breadcrumbs>
    </div>
  );
};

export default Clients;
