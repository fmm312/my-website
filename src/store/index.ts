// import { createStore } from 'redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer);

// export default store;

import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducers from "./reducers";

const makeStore = () => {
  const store = createStore(reducers, composeWithDevTools());

  return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });