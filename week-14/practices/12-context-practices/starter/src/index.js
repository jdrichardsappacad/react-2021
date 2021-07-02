import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const Root = () =>{
  return (
    <App/>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
