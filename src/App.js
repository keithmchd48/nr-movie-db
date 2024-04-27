import Body from "components/Body";
import LoadingPage from "components/LoadingPage";
import appStore from "utils/appStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

function App() {
  const persistor = persistStore(appStore);
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
