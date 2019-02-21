import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import reducers from '../reducers';

/**
 * Inject middle-ware to enhance redux store.
 */
function enhancer() {
  let middlewares = [ ReduxThunk, ReduxPromise ];

  // applyMiddleware function is provided by Redux
  // The propose of the 
  return compose(applyMiddleware(...middlewares));
}

/**
 * Define the global store to handle all application data
 * 
 * In redux app, there should be only one store in whole application.
*/
export default function generateStore(){
  let store = createStore(reducers, enhancer());
  return store;
}