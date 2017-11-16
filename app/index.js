import React from 'react';
import ReactDOM from 'react-dom';
import RouteMap from './router/RouteMap'
import { hashHistory } from 'react-router'
import './static/css/layout.less'

ReactDOM.render(
    <RouteMap history={ hashHistory }/>,
  document.getElementById('content')
);
 