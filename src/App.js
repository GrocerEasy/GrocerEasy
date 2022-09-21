import React from 'react';
import MainContainer from './components/MainContainer';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from "./components/Header"
import Footer from "./components/Footer";

function App() {
  return (
    <div className='root'>
    <Provider store={store}>
      <Header/>
      <MainContainer />
      <Footer/>
    </Provider>
    </div>
  );
}

export default App;
