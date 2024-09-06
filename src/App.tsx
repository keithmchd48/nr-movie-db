import Body from "components/routing/Body";
import LoadingPage from "components/units/LoadingPage";
import appStore from "store/appStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Persistor, persistStore } from "redux-persist";

function App() {
  const persistor: Persistor = persistStore(appStore);
  return (
    <Provider store={appStore}>
      <PersistGate loading={<LoadingPage/>} persistor={persistor}>
        <div className="font-Roboto bg-brand-black w-full h-full">
          <Body />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
