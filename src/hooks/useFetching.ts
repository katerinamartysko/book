import { useState } from 'react';

type UseFetchingCallback = (...arg: Array<any>) => Promise<void>;

export const useFetching = (callback: UseFetchingCallback): [UseFetchingCallback, boolean, string | null] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetching = async (...args: Array<unknown>): Promise<void> => {
    try {
      setIsLoading(true);
      await callback(...args);
      setError(null);
    } catch (e: unknown | Error) {
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
