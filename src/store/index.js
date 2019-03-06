import { createStore, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import reducers from "../reducers";
import { epics } from "../actions";

const rootEpic = combineEpics(...Object.values(epics));
const epicMiddleware = createEpicMiddleware();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default function generateStore() {
  let store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);
  return store;
}
