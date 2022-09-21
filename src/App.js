import React from 'react';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store'

import MainContainer from './components/MainContainer';

function App() {
  return (
    <Provider store={ store }>
        <MainContainer />
    </Provider>

  )
};

export default App;