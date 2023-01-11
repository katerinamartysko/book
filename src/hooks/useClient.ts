import { useQuery } from 'react-query';
import PostService from '../api/PostServise';
import { useState } from 'react';
import { Client } from '../api/types';

export const useClient = (id: number) => {
  const [, setError] = useState<string | null>(null);

  const { isLoading, data, isError } = useQuery(['client', id], () => PostService.getClient(id), {
    onError: (e: unknown | Error) => {
      setError((e as Error).message);
    },
    select: ({ data }): Client => data,
    enabled: !!id,
  });

  return { isLoading, data, isError };
};
