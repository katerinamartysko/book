import { Client } from '../../api/types';
import { PayloadAction } from '../types';
import c from '../clients/constants';

export type GetClientsAction = PayloadAction<c.GET_CLIENTS, Array<Client>>;

export const getClients = (clients: Array<Client>): GetClientsAction => ({
  type: c.GET_CLIENTS,
  payload: clients,
});
