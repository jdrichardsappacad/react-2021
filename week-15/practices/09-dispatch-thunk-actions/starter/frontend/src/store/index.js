import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

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
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
} else {
  enhancer = applyMiddleware(thunk);
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
