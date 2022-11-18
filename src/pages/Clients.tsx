import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import '../App.css';
const Clients = () => {
  return (
    <div className="root">
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default Clients;
