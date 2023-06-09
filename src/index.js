import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/styles/index.scss";
import { Provider } from 'react-redux';
import { store } from './features/redux-toolkit/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
