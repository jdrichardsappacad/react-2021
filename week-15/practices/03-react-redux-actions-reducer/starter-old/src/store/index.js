import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

//import articleReducer

import fruitReducer from './fruitReducer';

const rootReducer = combineReducers({
  //add reducer
  // maybe name articleSTate?

  fruit: fruitReducer
});

let enhancer;

if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
