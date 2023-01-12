import { createContext } from 'react';
import { ClientContextType } from '../api/types';

const clientContext: ClientContextType = {
  client: null,
  setClient: () => undefined,
};

export const ClientContext = createContext(clientContext);
