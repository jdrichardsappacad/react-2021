import { useState, useEffect } from 'react';

function FunctionComponent({ title }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(5);
    }, 5000);
    return () => console.log('cleanup');
  }, []);

  useEffect(() => {
    console.log('hello world!');
  }, [count]);

  return (
    <>
      <h1>{title}</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default FunctionComponent;
