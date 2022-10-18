import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMW = createSagaMiddleware();

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMW))
);

sagaMW.run(rootSaga);

export default store;
