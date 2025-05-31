import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "utils/translations/i18n";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { RouterProvider, createRouter, createHashHistory } from "@tanstack/react-router";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import LoadingPage from "components/units/LoadingPage";
import appStore from "store/appStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor, persistStore } from "redux-persist";

// Create a new router instance
const router = createRouter({
  routeTree,
  history: createHashHistory(),
  // Add context for auth
  context: {
    auth: undefined!
  }
});

const DOMAIN: string = import.meta.env["VITE_AUTH0_DOMAIN"] || "";
const CLIENT_ID: string = import.meta.env["VITE_AUTH0_CLIENT_ID"] || "";

function InnerApp() {
  const auth = useAuth0();
  if (auth.isLoading) {
    // TODO: Show something nice while loading
    return <LoadingPage />;
  }
  return <RouterProvider router={router} context={{ auth }} />;
}

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement: HTMLDivElement | null = document.getElementById("root") as HTMLDivElement;

if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  const persistor: Persistor = persistStore(appStore);

  root.render(
    <StrictMode>
      <Auth0Provider
        domain={DOMAIN}
        clientId={CLIENT_ID}
        useRefreshTokens={true}
        cacheLocation="localstorage"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Provider store={appStore}>
          <PersistGate loading={<LoadingPage/>} persistor={persistor}>
            <div className="font-roboto bg-brand-black w-full h-full">
              <InnerApp />
            </div>
          </PersistGate>
        </Provider>
      </Auth0Provider>
    </StrictMode>
  );
}
