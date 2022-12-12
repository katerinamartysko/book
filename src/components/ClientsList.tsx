import React, { FC, useEffect } from 'react';
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
import { selectClientsList, selectSearch } from '../store/clients/selectors';
import { getClientsList, setSearch } from '../store/clients/actions';
import PostService from '../api/PostServise';
import { useFetching } from '../hooks';
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

export const ClientsList: FC<Props> = ({ setClientID }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const clients = useSelector(selectClientsList);
  const search = useSelector(selectSearch);

  const [fetchClients, isClientsLoading, clientError] = useFetching(async () => {
    const response = await PostService.getClients();
    dispatch(getClientsList(response.data));
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const handelSearch = (search: string): void => {
    dispatch(setSearch(search));
  };

  if (isClientsLoading) return <CircularProgress className={classes.load} />;
  if (clientError) return <h1 className="error">Произошла ошибка {clientError}</h1>;
  if (!clients.length) return <h1> No clients found </h1>;
  return (
    <div>
      <Search search={search} onSearch={handelSearch} />
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <List
            component="nav"
            aria-label="mailbox folders"
            subheader={<ListSubheader component="div">Phone book</ListSubheader>}
          >
            {clients.map(client => (
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
