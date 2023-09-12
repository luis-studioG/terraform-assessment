import { Cookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

interface QueryCacheError {
  data: { message?: string };
}
const cookies = new Cookies();
const token = cookies.get('token');

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 1,
      //set Stale time to 25 minutes
      staleTime: 1500000,
      // staleTime: 5000,
      cacheTime: 3600000, // 1 hour
      refetchOnMount: false, //"always",
      refetchOnWindowFocus: false, //"always",
      refetchOnReconnect: false, //"always",
      refetchInterval: 3600000, // 1 hour
      onError: (error: unknown) => {
        if (token) {
          const myError = error as QueryCacheError;
          toast.error(`Something went wrong.: ${myError?.data?.message ?? 'Unknown error'}`);
        }
      },
    },
    mutations: {
      retry: 1,
      onError: (error: unknown) => {
        const myError = error as QueryCacheError;
        toast.error(`Something went wrong.: ${myError?.data?.message ?? 'Unknown error'}`);
      },
    },
  },
};
export const queryClient = new QueryClient(queryClientConfig);
