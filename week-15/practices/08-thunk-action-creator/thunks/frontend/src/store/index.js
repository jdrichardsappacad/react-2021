import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
//!!START SILENT
import thunk from 'redux-thunk';
//!!END

import articleReducer from './articleReducer';
import fruitReducer from './fruitReducer';

const rootReducer = combineReducers({
  articleState: articleReducer,
  fruitState: fruitReducer,
});

let enhancer;

if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
  //!!START SILENT
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
  //!!END
  //!!ADD
  // enhancer = composeEnhancers(applyMiddleware(logger));
  //!!END_ADD
} else {
  //!!START SILENT
  enhancer = applyMiddleware(thunk);
  //!!END
  //!!ADD
  // enhancer = applyMiddleware();
  //!!END_ADD
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
