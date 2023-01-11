import { useQuery } from 'react-query';
import PostService from '../api/PostServise';
import { useState } from 'react';
import { ClientList } from '../api/types';

export const useClientsList = () => {
  const [, setError] = useState<string | null>(null);

  const { isLoading, data, isError } = useQuery('client', () => PostService.getClients(), {
    onError: (e: unknown | Error) => {
      console.log(e);
      setError((e as Error).message);
    },
    select: ({ data }): Array<ClientList> => data,
  });

  return { isLoading, data, isError };
};
