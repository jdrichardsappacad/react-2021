import { useHistory } from 'react-router-dom';

const Unmounted = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
    history.push('/mount');
  };

  return (
    <div className='unmounted'>
      <h1>Welcome</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Unmounted;
