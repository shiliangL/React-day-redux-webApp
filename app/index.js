import React from 'react';
import ReactDOM from 'react-dom';
// import './static/css/layout.less'
import { Provider } from 'react-redux'
import { createStore } from "redux";

// todo reducers
import reducers from "./redux/reducers/index";
const store = createStore(reducers);

import Index from "./todo/index";
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("content")
);
 