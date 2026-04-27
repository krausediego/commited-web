import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tailwind.css";
// import "./common/i18n";
import { App } from "./app.tsx";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";

const router = createRouter({ routeTree });

export type TanstackRouter = typeof router;

declare module "@tanstack/react-router" {
	interface Register {
		router: TanstackRouter;
	}
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback="loading">
			<App router={router} />
		</Suspense>
	</StrictMode>
);
