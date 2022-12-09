import { ClientList } from '../api/types';

export const useClients = (clientsList: Array<ClientList>, query: string | null): Array<ClientList> => {
  if (query === null) return clientsList;
  return clientsList.filter(
    client =>
      client.general.firstName.toLowerCase().includes(query.toLowerCase()) ||
      client.general.lastName.toLowerCase().includes(query.toLowerCase())
  );
};
