import React from 'react';
import ReactDOM from 'react-dom';
import HoroscopeProvider from './context/HoroscopeContext';
import './index.css';
import App from './App';

const Root = () => {
  return (
    <HoroscopeProvider>
      <App />
    </HoroscopeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
