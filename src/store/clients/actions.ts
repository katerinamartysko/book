import { Client, ClientList } from '../../api/types';
import { Action, PayloadAction } from '../types';
import c from '../constants';

export type GetClientsAction = PayloadAction<c.GET_CLIENTS_LIST, Array<ClientList>>;
export type GetClientsIdAction = PayloadAction<c.GET_CLIENT, Client>;
export type RemoveClientsIdAction = Action<c.REMOVE_CLIENT>;
export type Search = PayloadAction<c.SEARCH, string | null>;

export const getClientsList = (clientsList: Array<ClientList>): GetClientsAction => ({
  type: c.GET_CLIENTS_LIST,
  payload: clientsList,
});

export const getClient = (client: Client): GetClientsIdAction => ({
  type: c.GET_CLIENT,
  payload: client,
});

export const removeClient = (client: null): RemoveClientsIdAction => ({
  type: c.REMOVE_CLIENT,
  payload: client,
});

export const setSearch = (query: string): Search => ({
  type: c.SEARCH,
  payload: query,
});
