import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import User from './User';

const colors = ['#0c9bbd', 'red', 'orange', 'green'];

const RandomUser = ({ isLoggedIn }) => {
  const [num, setNum] = useState(0);
  const [searchChange, setSearchChange] = useState('');
  const [searchWord, setSearchWord] = useState(
    localStorage.setItem('user') || 'foobar'
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUser = () => {
      const res = await fetch(`https://randomuser.me/api/?seed=${searchWord}`);
      const data = await res.json();
      setData(data.results);
    };
  }, []);

  useEffect(() => {
    localStorage.getItem('user', searchWord);
  }, [searchWord]);

  useEffect(() => {
    setInterval(() => {
      console.log('I AM STILL RUNNING. SHOULD I BE?');
      setNum((prevNum) => (prevNum === 3 ? 0 : prevNum + 1));
    }, 7000);
  }, []);

  if (!isLoggedIn) return <Redirect to='/' />;

  return (
    <div
      style={{
        backgroundColor: colors[num],
        transition: 'background-color 4s'
      }}
      className='container'
    >
      <div className='person'>
        {data && data.map((data) => <User key={data.id.value} data={data} />)}
      </div>
      <div className='form-wrapper'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearchWord(searchChange);
            setSearchChange('');
          }}
        >
          <label htmlFor='search'>Search:</label>
          <input
            id='search'
            onChange={(e) => setSearchChange(e.target.value)}
            value={searchChange}
            name='searchWord'
            placeholder='Username'
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RandomUser;
