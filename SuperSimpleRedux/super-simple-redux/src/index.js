import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';
import './index.css';

// Add these imports - Step 1
import { Provider } from 'react-redux';
import { store } from './redux';

// Wrap existing app in Provider - Step 2

// ReactDOM: lefordítja a jsx-et html-re és beküldi(=rendereli) a .html-de a root nevű div alá
ReactDOM.render(
  // Provider: szétszórja a STORE-t
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root') // => index.html
);
