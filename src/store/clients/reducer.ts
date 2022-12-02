import { GetClientsAction, GetClientsIdAction } from './actions';
import { Client, ClientList } from '../../api/types';
import c from './constants';

type ClientsActions = GetClientsAction | GetClientsIdAction;

interface ClientsState {
  clientsList: Array<ClientList>;
  currentClient: Client | null;
}

const INITIAL_STATE: ClientsState = {
  clientsList: [],
  currentClient: null,
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
    case c.GET_CLIENT_ID: {
      const currentClient = action.payload;
      return {
        ...state,
        currentClient,
      };
    }

    default:
      return state;
  }
};
