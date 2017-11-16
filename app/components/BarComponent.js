import React, { Component } from 'react'
import '../static/css/style.less'

export default class BarComponent extends Component {
  render() {
    return (
      <div className="BarComponent" style={{ backgroundColor:this.props.color}}>
        BarComponent
      </div>
    )
  }
}
