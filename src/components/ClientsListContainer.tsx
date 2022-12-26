import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { CircularProgress } from '@mui/material';
import { selectClientsList, selectSearch } from '../store/clients/selectors';
import { getClientsList, setSearch } from '../store/clients/actions';
import PostService from '../api/PostServise';
import { useFetching } from '../hooks';
import { Search } from './Search';
import { ClientList } from './ClientList';

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
  return (
    <div className={classes.root}>
      <Search search={search} onSearch={handelSearch} />
      <ClientList clientID={clientID} clients={clients} onSetClientID={onSetClientID} />
    </div>
  );
};