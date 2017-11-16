//页面输出位置
import React, { Component } from 'react'
import { connect } from 'react-redux'

import BarComponent from '../components/BarComponent'
import Nav from '../components/Nav'

export default class App extends Component {
  render() {
    return (
      <div id="wrapApp">
        <div className="content">
          <div className="main">
            <div> {this.props.children} </div>
          </div>
        </div>
        {/* <div className="footer">
          <Nav />
        </div> */}
      </div>
    )
  }
  componentDidMount(){

  }
}

