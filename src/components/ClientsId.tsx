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
  const isNoClientID = clientID === null;

  const [fetchClientsById] = useFetching(async (id: number) => {
    const response = await PostService.getClientId(id);
    dispatch(getClientId(response.data));
  });

  useEffect(() => {
    if (isNoClientID) return;
    fetchClientsById(clientID);
  }, [clientID]);

  if (isNoClientID) return null;

  return (
    <div>
      <Typography>{clientID}</Typography>
    </div>
  );
};
