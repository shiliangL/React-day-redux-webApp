import React, { Component } from 'react'
import { Button } from 'antd-mobile';

export default class Login extends Component {
  render() {
    const store = this.props.store
    return (
      <div>
        子组件页面
        <Button onClick={()=>{
          console.log(store)
        }}>登录</Button>
      </div>
    )
  }
}
