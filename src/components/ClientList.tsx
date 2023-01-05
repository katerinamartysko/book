import React, { FC } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Avatar, Typography } from '@mui/material';
import classNames from 'classnames';
import { ClientList as IClientList } from '../api/types';
import { theme, getFirstLetters } from '../utils';

const useStyles = makeStyles()(() => ({
  list: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRight: '1px solid #808080 ',
    borderBottom: '1px solid #808080 ',
  },
  listActive: {
    borderRight: 'none',
    borderBottom: '3px solid #808088 ',
    borderTop: '2px solid #808088 ',
  },
  load: {
    justifyContent: 'center',
  },
  avatar: {
    background: 'pink',
    marginLeft: theme.spacing(0.7),
  },
  divider: {
    marginLeft: theme.spacing(5),
  },
  nameContainer: {
    alignSelf: 'center',
    display: 'flex',
  },
  name: {
    marginLeft: theme.spacing(1),
  },
  scroll: {
    height: 'calc(100% - 56px)',
    width: '100%',
  },
}));

interface Props {
  clients: Array<IClientList>;
  clientID: number | null;
  onSetClientID: (clientID: number) => void;
}

export const ClientList: FC<Props> = ({ clients, clientID, onSetClientID }) => {
  const { classes } = useStyles();

  if (!clients.length) return <h1> No clients found </h1>;
  return (
    <Scrollbars className={classes.scroll}>
      <Typography>Phone book</Typography>
      <div>
        {clients.map(client => (
          <div
            key={client.id}
            className={classNames(classes.list, { [classes.listActive]: clientID === client.id })}
            onClick={() => onSetClientID(client.id)}
          >
            <Avatar alt={client.general.firstName} src={client.general.avatar} className={classes.avatar}>
              {getFirstLetters(client.general)}
            </Avatar>
            <div className={classes.nameContainer}>
              <Typography className={classes.name}>{client.general.firstName}</Typography>
              &nbsp;
              <Typography>{client.general.lastName} </Typography>
            </div>
          </div>
        ))}
      </div>
    </Scrollbars>
  );
};
