import { PropsWithChildren, useMemo } from "react";
import {
  QueryClientProvider as Provider,
  QueryClient,
} from "@tanstack/react-query";
export const QueryClientProvider = ({
  children,
  queryClient,
}: PropsWithChildren<{
  queryClient?: QueryClient;
}>) => {
  const finalQueryClient = useMemo(
    () =>
      queryClient ||
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      }),
    [queryClient]
  );
  return <Provider client={finalQueryClient}>{children}</Provider>;
};
