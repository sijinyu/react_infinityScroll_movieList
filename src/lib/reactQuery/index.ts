import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 0,
      suspense: true,
      useErrorBoundary: true,
    },
    mutations: {
      useErrorBoundary: true,
    },
  },
});

export const handleInvalidateQueries = (key: string[]) => {
  queryClient.invalidateQueries(key);
};
export const handleAllInvalidateQueries = () => {
  queryClient.invalidateQueries();
};

export const handleSetQueryData = <T>(key: string[], response: T) => {
  queryClient.setQueryData(key, response);
};
