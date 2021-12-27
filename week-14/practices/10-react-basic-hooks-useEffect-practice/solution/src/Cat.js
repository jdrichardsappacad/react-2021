//!!START SILENT
import { useState, useEffect } from 'react';
//!!END
//!!ADD
import { useState } from 'react';
//!!END_ADD

import { useHistory } from 'react-router-dom';
import { colors, codes } from './data';

const Cat = () => {
  const history = useHistory();
  const [colorNum, setColorNum] = useState(0);
  //!!START SILENT
  const [statusChange, setStatusChange] = useState(
    localStorage.getItem('catStatus') || '418'
  );
  //!!END

  //!!ADD
  const [statusChange, setStatusChange] = useState('418');
  //!!END_ADD
  const [status, setStatus] = useState('');

  //START SILENT
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorNum(prevNum => (prevNum === 4 ? 0 : prevNum + 1));
    }, 5000);

    return () => clearInterval(colorInterval);
  }, []);

  useEffect(() => {
    localStorage.setItem('catStatus', statusChange);
  }, [statusChange]);

  useEffect(() => {
    if (!codes.includes(Number(statusChange))) {
      alert(
        `Code ${statusChange} Might Exist, But It Is Not A Proper Cat Status Code`
      );
    }
  }, [statusChange]);
  //END
  const handleSubmit = e => {
    e.preventDefault();
    setStatusChange(status);
    setStatus('');
  };

  return (
    <div
      className='cat-container'
      style={{
        backgroundColor: colors[colorNum],
        transition: 'background-color 4s',
      }}
    >
      <h1>Cat Status</h1>
      <button onClick={() => history.push('/')}>Home</button>
      <div className='image-container'>
        <img src={`https://http.cat/${statusChange}`} alt='200' />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='cStatus'>
          <input
            type='number'
            id='cStatus'
            onChange={e => setStatus(e.target.value)}
            placeholder='find new status'
            value={status}
          />
        </label>
        <button type='submit'>Change Status</button>
      </form>
    </div>
  );
};
export default Cat;
