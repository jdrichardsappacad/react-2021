import "./UseState.css"
import {useState} from 'react'

const UseState = () => {
  // console.log(useState('light'))
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme}>
      <h1>UseState Component</h1>
      <button onClick={()=>setTheme('dark')}>Dark</button>
      <button onClick={()=>setTheme('lighjt')}>Light</button>
    </div>
  );
};
export default UseState;
