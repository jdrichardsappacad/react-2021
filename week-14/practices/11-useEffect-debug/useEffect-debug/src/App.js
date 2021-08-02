import RandomUserTwo from './RandomUserTwo';
import Unmounted from './Unmounted';

import { Route, Switch } from 'react-router-dom';

// function App() {
//   return <RandomUserTwo />;
// }

// export default App;

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <RandomUserTwo />
        </Route>
        <Route path='/unmount'>
          <Unmounted />
        </Route>
      </Switch>
    </>
  );
}
export default App;
