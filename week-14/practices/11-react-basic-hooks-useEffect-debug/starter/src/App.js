import { useState } from 'react';
import RandomUser from './RandomUser';
import Unmounted from './Unmounted';

import { Route, Switch } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Unmounted setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path='/mount'>
          <RandomUser isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </>
  );
}
export default App;
