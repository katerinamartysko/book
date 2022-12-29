import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { CircularProgress } from '@mui/material';
import { selectClientsList, selectSearch } from '../store/clients/selectors';
import { getClientsList, setSearch } from '../store/clients/actions';
import { useFetching, useDebouncedCallback } from '../hooks';
import PostService from '../api/PostServise';
import { ClientList } from './ClientList';
import { Search } from './Search';

const useStyles = makeStyles()(() => ({
  root: {
    height: '100%',
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

  const clients = useSelector(selectClientsList);
  const search = useSelector(selectSearch);
  const [clientSearch, setClientSearch] = useState<string | null>(search);

  const [fetchClients, isClientsLoading, clientError] = useFetching(async () => {
    const response = await PostService.getClients();
    dispatch(getClientsList(response.data));
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const searchClients = useDebouncedCallback((search: string): void => {
    dispatch(setSearch(search));
  }, 800);

  const handelSearch = (search: string): void => {
    setClientSearch(search);
    searchClients(search);
  };

  if (isClientsLoading) return <CircularProgress className={classes.load} />;
  if (clientError) return <h1 className="error">Произошла ошибка {clientError}</h1>;
  return (
    <div className={classes.root}>
      <Search search={clientSearch} onSearch={handelSearch} />
      <ClientList clientID={clientID} clients={clients} onSetClientID={onSetClientID} />
    </div>
  );
};
