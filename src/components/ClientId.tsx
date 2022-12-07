import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress, Divider, Typography } from '@mui/material';
import PostService from '../api/PostServise';
import { useFetching } from '../hooks/useFetching';
import { getClientId } from '../store/clients/actions';
import { State } from '../store/store';

interface Props {
  clientID: number | null;
}

export const ClientId: FC<Props> = ({ clientID }) => {
  const dispatch = useDispatch();
  const client = useSelector((state: State) => state.clients.currentClient);

  const [fetchClientsById, isClientIdLoading, clientIdError] = useFetching(async (id: number) => {
    const response = await PostService.getClientId(id);
    dispatch(getClientId(response.data));
  });

  useEffect(() => {
    if (clientID === null) return;
    fetchClientsById(clientID);
  }, [clientID]);

  if (!client) return null;
  return (
    <div>
      <div>
        <Typography>
          Name:
          {client.general.firstName} {client.general.lastName}
        </Typography>
        <Divider />
        <Typography>
          Job: Company: {client.job.company} <br /> Title: {client.job.title} <br />
        </Typography>
        <Typography>
          Address: Country:
          {client.address.country} <br /> City: {client.address.city} <br /> Street: {client.address.street}
          <br /> Zip code: {client.address.zipCode}
        </Typography>
      </div>
      {clientIdError && <h1 className="error">Произошла ошибка {clientIdError}</h1>}
      {isClientIdLoading && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};
