import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='Login' element={<Login />} />
        <Route path='Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
