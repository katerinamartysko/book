import { Client, ClientList } from '../../api/types';
import { PayloadAction } from '../types';
import c from '../clients/constants';

export type GetClientsAction = PayloadAction<c.GET_CLIENTS_LIST, Array<ClientList>>;
export type GetClientsIdAction = PayloadAction<c.GET_CLIENT_ID, Client>;

export const getClientsList = (clientsList: Array<ClientList>): GetClientsAction => ({
  type: c.GET_CLIENTS_LIST,
  payload: clientsList,
});

export const getClientId = (client: Client): GetClientsIdAction => ({
  type: c.GET_CLIENT_ID,
  payload: client,
});
