import React, { FC } from 'react';
import { Client } from './Client';

interface Props {
  clientID: number | null;
  onRemoveClientID: () => void;
}

export const ClientContainer: FC<Props> = ({ clientID, onRemoveClientID }) => {
  if (!clientID) return null;
  return <Client clientID={clientID} onRemoveClientID={onRemoveClientID} />;
};
