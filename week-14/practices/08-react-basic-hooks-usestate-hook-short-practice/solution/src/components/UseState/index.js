//!!START SILENT
import { useState } from 'react';
import './UseState.css';

const UseState = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  return (
    <div className={`state ${theme}`}>
      {console.log('render or re-render')}
      <h1>UseState Component</h1>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

//!!END
//!!ADD
//const UseState = () => {
//return (
//<div>
//<h1>UseState Component</h1>
//</div>
//);
//};
//!!END_ADD
export default UseState;
