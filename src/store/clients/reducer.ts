import { GetClientsAction, GetClientsIdAction, RemoveClientsIdAction, Search } from './actions';
import { Client, ClientList } from '../../api/types';
import c from '../constants';

type ClientsActions = GetClientsAction | GetClientsIdAction | RemoveClientsIdAction | Search;

export interface ClientsState {
  clientsList: Array<ClientList>;
  currentClient: Client | null;
  search: string | null;
}

const INITIAL_STATE: ClientsState = {
  clientsList: [],
  currentClient: null,
  search: null,
};

export const clientsReducer = (state = INITIAL_STATE, action: ClientsActions): ClientsState => {
  switch (action.type) {
    case c.GET_CLIENTS_LIST: {
      const clientsList = action.payload;
      return {
        ...state,
        clientsList: [...state.clientsList, ...clientsList],
      };
    }

    case c.GET_CLIENT: {
      const currentClient = action.payload;
      return {
        ...state,
        currentClient,
      };
    }

    case c.REMOVE_CLIENT: {
      return {
        ...state,
        currentClient: null,
      };
    }

    case c.SEARCH: {
      const search = action.payload;
      return {
        ...state,
        search,
      };
    }

    default:
      return state;
  }
};
