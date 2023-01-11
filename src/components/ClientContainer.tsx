import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeClient } from '../store/clients/actions';
import { Client } from './Client';

interface Props {
  clientID: number | null;
  onRemoveClientID: () => void;
}

export const ClientContainer: FC<Props> = ({ clientID, onRemoveClientID }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (clientID === null) {
      dispatch(removeClient(null));
      return;
    }
  }, [clientID]);

  if (!clientID) return null;
  return <Client clientID={clientID} onRemoveClientID={onRemoveClientID} />;
};
