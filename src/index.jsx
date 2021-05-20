import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';
import { store } from './store';
import { GlobalStyle } from './App/GlobalStyle';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <>
          <App/>
          <GlobalStyle/>
        </>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
