import React from 'react';
import ReactDOM from 'react-dom';
//!!START
import { Provider } from 'react-redux';
//!!END
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//!!START
import configureStore from './store';
//!!END
import './index.css';
//!!START
const store = configureStore();
//!!END


ReactDOM.render(
  <React.StrictMode>
    {/*!!START */}
    <Provider store={store}>
      {/*!!END */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/*!!START */}
    </Provider>
    {/*!!END */}
  </React.StrictMode>,
  document.getElementById('root')
);
