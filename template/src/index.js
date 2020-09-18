import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

import "./assets/stylesheets/App.css";

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore({})

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);
})