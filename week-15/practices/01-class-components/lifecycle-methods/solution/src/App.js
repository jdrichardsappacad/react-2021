import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import ClassTitan from './components/classComponents/ClassTitan.js';
// import FunctionTitan from './components/functionalComponents/FunctionTitan.js';
import ClassKuiper from './components/classComponents/ClassKuiper.js';
// import FunctionalKuiper from './components/functionalComponents/FunctionKuiper.js';

const App = () => {
  return (
    <div className='main-container'>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <div className='welcome'>
            <h1>Welcome! Choose Which Cat You Want to Play With</h1>
          </div>
        </Route>
        <Route path='/titan'>
          <Titan />
        </Route>
        <Route path='/kuiper'>
          <Kuiper />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
