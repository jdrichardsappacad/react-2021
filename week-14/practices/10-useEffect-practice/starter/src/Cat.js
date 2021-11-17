import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { colors, codes } from './data';

const Cat = () => {
  const history = useHistory();
  const [colorNum, setColorNum] = useState(0);
  const [statusChange, setStatusChange] = useState(localStorage.getItem('catStatus') || '418');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColorNum(prevNum => (prevNum === 4 ? 0 : prevNum + 1));
    }, 5000);

    return () => clearInterval(colorInterval);
  }, [])


  useEffect(() => {
    if (statusChange === '') {
      alert('Please Enter A Code');
      setStatusChange('404');
      return;
    }
    if (!codes.includes(Number(statusChange))) {
      alert(
        `Code ${statusChange} Might Exist, But It Is Not A Proper Cat Status Code`
      );
      setStatusChange(404);
    }
  }, [statusChange]);



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
      <button
        onClick={() => {
          setStatusChange('418');
          history.push('/');
        }}
      >
        Home
      </button>
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
