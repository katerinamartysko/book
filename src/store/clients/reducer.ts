import { GetClientsAction } from './actions';
import { Client } from '../../api/types';
import c from './constants';

type ClientsActions = GetClientsAction

interface ClientsState {
  clients: Array<Client>;
}

const INITIAL_STATE: ClientsState = {
  clients: []
};

export const clientsReducer = (state = INITIAL_STATE, action: ClientsActions): ClientsState => {
  switch (action.type) {
    case c.GET_CLIENTS: {
      const clients = action.payload;
      return {
        ...state,
        clients: [...state.clients, ...clients],
      };
    }

    default:
      return state;
  }
};
