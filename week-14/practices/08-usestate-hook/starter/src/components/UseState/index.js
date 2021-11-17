import "./UseState.css"
import {useState} from 'react'

const UseState = () => {
  // console.log(useState('light'))
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  return (
    <div className={`${theme} container`}>
      <h1>UseState Component</h1>
      <button onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? 'dark' : 'light'}</button>
      <button onClick={()=> setCount((prevState) => prevState + 1)}> Increment </button>
      <h1> {count} </h1>
      {/* <button onClick={()=>setTheme('light')}>Light</button> */}
      <button onClick={()=> setCount((prevState) => prevState - 1)}> Decrement </button>

    </div>
  );
};
export default UseState;
