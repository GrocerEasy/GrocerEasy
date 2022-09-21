import React from 'react';
import MainContainer from './components/MainContainer';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

export default App;
