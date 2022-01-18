import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar.js';
//!!START SILENT
import ClassTitan from './components/classComponents/ClassTitan.js';
//!!END
//!!ADD
import FunctionTitan from './components/functionalComponents/FunctionTitan.js';
//!!END_ADD
//!!START SILENT
import ClassKuiper from './components/classComponents/ClassKuiper.js';
//!!END
//!!ADD
import FunctionKuiper from './components/functionalComponents/FunctionKuiper.js';
//!!END_ADD
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
          {/*!!START SILENT */}
          <ClassTitan />
          {/*!!END*/}
          {/*!!ADD */}
          <FunctionTitan />
        </Route>
        <Route path='/kuiper'>
          {/*!!START SILENT */}
          <ClassKuiper />
          {/*!!END*/}
          {/*!!ADD */}
          <FunctionKuiper />
          {/*!!END_ADD */}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
