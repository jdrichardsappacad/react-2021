import RandomUser from './RandomUser';
import Unmounted from './Unmounted';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <RandomUser />
        </Route>
        <Route path='/unmount'>
          <Unmounted />
        </Route>
      </Switch>
    </>
  );
}
export default App;
