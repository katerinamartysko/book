import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { selectClient, selectSearch } from '../store/clients/selectors';
import { useDebouncedCallback, useClientsList } from '../hooks';
import { setSearch } from '../store/clients/actions';
import { ClientList } from './ClientList';
import { Search } from './Search';
import { theme } from '../utils';

const useStyles = makeStyles()(() => ({
  root: {
    height: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      flexDirection: 'row-reverse',
    },
    [theme.breakpoints.up('sm')]: {
      width: '210px',
    },
  },
  load: {
    justifyContent: 'center',
  },
}));

interface Props {
  clientID: number | null;
  onSetClientID: (clientID: number) => void;
}

export const ClientsListContainer: FC<Props> = ({ clientID, onSetClientID }) => {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const search = useSelector(selectSearch);
  const client = useSelector(selectClient);

  const [clientSearch, setClientSearch] = useState<string | null>(search);
  const isHideClientsList = useMediaQuery(theme.breakpoints.down('sm'));

  const { data: clientList, isLoading: isClientsLoading, isError } = useClientsList();

  const searchClients = useDebouncedCallback((search: string): void => {
    dispatch(setSearch(search));
  }, 800);

  const handelSearch = (search: string): void => {
    setClientSearch(search);
    searchClients(search);
  };

  if (isClientsLoading) return <CircularProgress className={classes.load} />;
  if (client && isHideClientsList) return null;
  if (isError || !clientList) {
    return (
      <Typography variant="h1" className="error">
        Error
      </Typography>
    );
  }
  return (
    <div className={classes.root}>
      <Search search={clientSearch} onSearch={handelSearch} />
      <Typography>CLIENT LIST</Typography>
      <ClientList clientID={clientID} clients={clientList} onSetClientID={onSetClientID} />
    </div>
  );
};
