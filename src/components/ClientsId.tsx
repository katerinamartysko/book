import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import PostService from '../api/PostServise';
import { useFetching } from '../hooks/useFetching';
import { getClientId } from '../store/clients/actions';
import { State } from '../store/store';

interface Props {
  clientID: number | null;
}

export const ClientsId: FC<Props> = ({ clientID }) => {
  const dispatch = useDispatch();
  const client = useSelector((state: State) => state.clients.currentClient);

  const [fetchClientsById] = useFetching(async (id: number) => {
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
      <Typography>{clientID}</Typography>
      <Typography>
        {client.general.firstName} {client.general.lastName} <br />
        {'Job:'} {client.job.company} {client.job.title} <br />
        {'Address:'}
        {client.address.country} {client.address.city} {client.address.street} {client.address.zipCode}
      </Typography>
    </div>
  );
};
