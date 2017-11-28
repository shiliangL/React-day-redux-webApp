import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router'
 
import './static/css/layout.less'
import { Provider } from 'react-redux'
import { createStore } from "redux";

// todo reducers
import reducers from "./redux/reducers/index";
const store = createStore(reducers);

import Index from "./todo/index";

import RouteMap from "./router/RouteMap";
ReactDOM.render(
  <Provider store={store}>
    <RouteMap history={hashHistory} />
  </Provider>,
  document.getElementById("content")
);
 