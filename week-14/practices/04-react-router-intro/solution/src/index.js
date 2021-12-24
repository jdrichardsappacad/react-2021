import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


//!!START SILENT
const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
//!!END

ReactDOM.render(
  <React.StrictMode>
   {/*!!START SILENT */} 
    <Root />
    {/*!!END */}
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
