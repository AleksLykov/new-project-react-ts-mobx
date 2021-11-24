import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
// local
import store from 'store/index';
import Routes from 'routes/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
