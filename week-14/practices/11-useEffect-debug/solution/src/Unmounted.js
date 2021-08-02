import { useHistory } from 'react-router-dom';

const Unmounted = () => {
  const history = useHistory();
  return (
    <div class='unmounted'>
      <h1>Welcome</h1>
      <button onClick={() => history.push('/')}>Login</button>
    </div>
  );
};
export default Unmounted;
