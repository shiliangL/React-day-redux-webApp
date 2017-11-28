//页面输出位置
import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavList from "../components/NavList/NavList";
export default class App extends Component {
  render() {
    return <div id="wrapApp">
        <div className="content">
          <div className="main">
            <div> {this.props.children} </div>
          </div>
        </div>
        <div className="footer">
          <NavList />
        </div>
      </div>;
  }
 
}

