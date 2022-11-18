import React from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader } from '@mui/material';
import '../App.css';

const Clients = () => {
  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  return (
    <div className="root">
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
        <ListItem>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
};

export default Clients;
