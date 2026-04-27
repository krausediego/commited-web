import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { TanstackRouter } from "./main";
import { RouterProvider } from "@tanstack/react-router";

const queryClient = new QueryClient();

type AppProps = { router: TanstackRouter };

const App = ({ router }: AppProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export { App };
