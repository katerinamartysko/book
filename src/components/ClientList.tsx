import React, { FC } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Avatar, Typography } from '@mui/material';
import classNames from 'classnames';
import { theme, getFirstLetters } from '../utils';
import { ClientList as IClientList } from '../api/types';

const useStyles = makeStyles()(() => ({
  flex: {
    display: 'flex',
  },
  list: {
    cursor: 'pointer',
    flexDirection: 'row',
    width: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRight: '1px solid #808080 ',
    borderBottom: '1px solid #808080 ',
    [theme.breakpoints.up('xs')]: {
      fontSize: '38px',
    },
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
    alignItems: 'center',
  },
  name: {
    marginLeft: theme.spacing(1),
  },
  scroll: {
    height: 'calc(100% - 56px)',
  },
}));

interface Props {
  clients: Array<IClientList>;
  clientID: number | null;
  onSetClientID: (clientID: number) => void;
}

export const ClientList: FC<Props> = ({ clients, clientID, onSetClientID }) => {
  const { classes } = useStyles();

  if (!clients.length) {
    return (
      <Typography variant="h1" className="error">
        Error
      </Typography>
    );
  }

  return (
    <Scrollbars className={classes.scroll}>
      <div>
        {clients.map(client => (
          <div
            key={client.id}
            className={classNames(classes.list, classes.flex, { [classes.listActive]: clientID === client.id })}
            onClick={() => onSetClientID(client.id)}
          >
            <Avatar alt={client.general.firstName} src={client.general.avatar} className={classes.avatar}>
              {getFirstLetters({ firstName: client.general.firstName, lastName: client.general.lastName })}
            </Avatar>
            <div className={classNames(classes.nameContainer, classes.flex)}>
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
