import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// assets
import 'assets/scss/style.scss';
import 'react-toastify/dist/ReactToastify.css';

// third party
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// project import
import App from 'layout/App';
import reducer from 'redux/features/reducer';

const store = configureStore({ reducer });
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
