import React, { Fragment } from 'react';
import { Breadcrumbs, Divider, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import '../App.css';
import { useSelector } from 'react-redux';
import { State } from '../store/store';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const Clients = () => {
  const clients = useSelector((state: State) => state.clients.clients);

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
