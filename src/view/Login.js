import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, InputItem } from 'antd-mobile';
import { LOGIN } from '../action/auth'

@connect(
  LOGIN
)
export default class Login extends Component {
  render() {
    return (
      <div>
        <InputItem clear placeholder="名称"></InputItem>
        <InputItem clear placeholder="密码"></InputItem>
        <Button onClick={() => {
          this.props.dispatch({ type:'LOGIN'})
        }}>登录</Button>
      </div>
    )
  }
}
