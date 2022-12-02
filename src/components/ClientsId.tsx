import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import PostService from '../api/PostServise';
import { useFetching } from '../hooks/useFetching';
import { getClientId } from '../store/clients/actions';

interface Props {
  clientID: number | null;
}

export const ClientsId: FC<Props> = ({ clientID }) => {
  const dispatch = useDispatch();

  const [fetchClientsById] = useFetching(async (id: number) => {
    const response = await PostService.getClientId(id);
    dispatch(getClientId(response.data));
  });

  useEffect(() => {
    if (clientID === null) return;
    fetchClientsById(clientID);
  }, [clientID]);

  if (clientID === null) return null;

  return (
    <div>
      <Typography>{clientID}</Typography>
    </div>
  );
};
