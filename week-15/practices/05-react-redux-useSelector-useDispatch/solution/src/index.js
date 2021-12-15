import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import configureStore from './store';
import {} from './store/articleReducer';
import './index.css';
//!!START
import {loadArticles} from './store/articleReducer'
//!!END
const store = configureStore();

//!!START
window.store = store
window.loadArticles = loadArticles
//!!END

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
