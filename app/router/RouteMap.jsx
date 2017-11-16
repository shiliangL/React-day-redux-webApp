import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../page/App.jsx'
import Home from '../page/Home/Home'
import List from '../page/List/List'
import Detail from '../page/Detail/Detail'
import Center from '../page/Center/Center'
import NotFound from '../page/NotFound'
import AdList from '../page/AdList/AdList'


export default class RouteMap extends Component {
  upDataHandle(){
    console.log('Router更新会触发')
  }
  render() {
    return (
     <Router history={this.props.history} onUpdate={this.upDataHandle.bind(this)}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/list' component={List} />
        <Route path='/detail' component={Detail} />
        <Route path='/center' component={Center} />
        <Route path='/adlist' component={AdList} />
        <Route path='*' component={NotFound} />
      </Route>
     </Router>
    )
  }
}
