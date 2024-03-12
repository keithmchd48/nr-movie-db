import Body from './components/Body';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={appStore}>
      <div className="font-Roboto bg-netflix-black">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
