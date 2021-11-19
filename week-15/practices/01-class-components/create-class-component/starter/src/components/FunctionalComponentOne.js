import { useState } from 'react';
import FunctionalComponentTwo from './FunctionalComponentTwo';

const FunctionalComponentOne = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    alert('Button Has Been Clicke!')
  }

  return (
    <div className='center'>
      <h1>Functional Component One</h1>
      <div className='one '>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
          Increment
        </button>

        <input
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder='Enter Your Message'
        />
        <button onClick={() => setMessage('')}>Clear</button>
        <button className='alert-button' onClick={() => handleClick()}>Alert</button>
      </div>

      <FunctionalComponentTwo count={count} message={message} />
    </div>
  );
};

export default FunctionalComponentOne;
