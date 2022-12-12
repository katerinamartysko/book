import { createSelector, Selector } from 'reselect';
import { Client, ClientList } from '../../api/types';
import { State } from '../store';

export const selectSearch = (state: State): string | null => state.clientsReducer.search;

export const selectClientsList: Selector<State, Array<ClientList>> = createSelector(
  (state: State) => state.clientsReducer.clientsList,
  selectSearch,
  (clientsList, search) => {
    if (search === null) return clientsList;
    return clientsList.filter(
      client =>
        client.general.firstName.toLowerCase().includes(search.toLowerCase()) ||
        client.general.lastName.toLowerCase().includes(search.toLowerCase())
    );
  }
);

export const selectClientId = (state: State): Client | null => state.clientsReducer.currentClient;
